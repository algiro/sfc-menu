import React, { useState, useEffect } from "react";
import AllergenCheckboxes from "./AllergenCheckboxes";
import { ADMIN_PASSWORD } from "../config";

const SECTIONS = ["cafes", "te", "bebidas", "tostas", "arepas"];

const validatePrice = (price) => {
    // Accept format like "1,23" or "12,50"
    const priceRegex = /^\d+,\d{2}$/;
    return priceRegex.test(price);
};

const getNextId = (entries) => {
    const maxId = Math.max(...entries.map(entry => entry.id || 0), 0);
    return maxId + 1;
};

function Admin() {
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [section, setSection] = useState("");
    const [data, setData] = useState({});
    const [entries, setEntries] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editEntry, setEditEntry] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (authenticated) {
            fetch("/api/menuData")
                .then((res) => res.json())
                .then((json) => setData(json));
        }
    }, [authenticated]);

    useEffect(() => {
        if (section && data[section]) {
            setEntries(data[section]);
            setEditIndex(null);
            setEditEntry(null);
        }
    }, [section, data]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setAuthenticated(true);
            setMessage("");
        } else {
            setMessage("Incorrect password");
        }
    };

    const handleEdit = (idx) => {
        const entry = entries[idx];
        let editableEntry = { ...entry };

        // Handle name field based on section type
        if (section === 'tostas' || section === 'arepas') {
            // Keep name as a simple string
            editableEntry = {
                ...editableEntry,
                name: entry.name || ''
            };
        } else {
            // Ensure name is an object for other sections
            if (typeof entry.name === 'string') {
                editableEntry.name = { es: entry.name, en: entry.name };
            } else {
                editableEntry.name = entry.name || { es: '', en: '' };
            }
        }

        setEditIndex(idx);
        setEditEntry(editableEntry);
    };

    const handleChange = (e, key = null) => {
        const name = key || (e?.target?.name || null);
        let value = e;

        if (e?.target) {
            value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        }

        setEditEntry(prev => {
            if (name === 'alergenos') {
                return { ...prev, alergenos: value };
            } else if (name === 'name' || name === 'ingredients') {
                return {
                    ...prev,
                    [name]: {
                        ...prev[name],
                        [e.target.getAttribute('data-lang')]: value
                    }
                };
            }
            return { ...prev, [name]: value };
        });
        setMessage('');
    };

    const handleSave = () => {
        const updated = [...entries];
        if (editIndex === -1) {
            // Adding new entry
            updated.push({ ...editEntry, id: getNextId(entries) });
        } else {
            // Editing existing entry
            updated[editIndex] = editEntry;
        }
        const newData = { ...data, [section]: updated };
        fetch("/api/menuData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ section, entries: updated }),
        })
            .then((res) => res.json())
            .then((json) => {
                setData(newData);
                setMessage("Saved successfully!");
                setEditIndex(null);
                setEditEntry(null);
            })
            .catch(err => {
                setMessage("Error saving changes");
                console.error(err);
            });
    };

    const handleDelete = (idx) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            const updated = entries.filter((_, i) => i !== idx);
            const newData = { ...data, [section]: updated };
            fetch("/api/menuData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ section, entries: updated }),
            })
                .then((res) => res.json())
                .then((json) => {
                    setData(newData);
                    setMessage("Item deleted successfully!");
                })
                .catch(err => {
                    setMessage("Error deleting item");
                    console.error(err);
                });
        }
    };

    const handleMove = (idx, direction) => {
        if ((direction === -1 && idx > 0) || (direction === 1 && idx < entries.length - 1)) {
            const updated = [...entries];
            const temp = updated[idx];
            updated[idx] = updated[idx + direction];
            updated[idx + direction] = temp;
            const newData = { ...data, [section]: updated };
            fetch("/api/menuData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ section, entries: updated }),
            })
                .then((res) => res.json())
                .then((json) => {
                    setData(newData);
                    setMessage("Order updated successfully!");
                })
                .catch(err => {
                    setMessage("Error updating order");
                    console.error(err);
                });
        }
    }; const handleAddNew = () => {
        // Create empty entry based on section type
        let newEntry = {
            id: getNextId(entries),
            name: { es: '', en: '' },
            price: ''
        };

        // Add section-specific fields
        if (section === 'tostas') {
            newEntry = {
                ...newEntry,
                tostaPrice: '',
                pulgaPrice: '',
                name: '', // tostas use simple name string
                ingredients: { es: '', en: '' },
                alergenos: {
                    frutoSecos: false,
                    gluten: false,
                    sesamo: false,
                    huevo: false,
                    lacteos: false,
                    vegan: false
                }
            };
        } else if (section === 'arepas') {
            newEntry = {
                ...newEntry,
                name: '', // arepas use simple name string
                ingredients: { es: '', en: '' },
                alergenos: {
                    frutoSecos: false,
                    gluten: false,
                    sesamo: false,
                    huevo: false,
                    lacteos: false,
                    vegan: false
                }
            };
        }

        setEditEntry(newEntry);
        setEditIndex(-1); // -1 indicates new entry
        setEntries([...entries, newEntry]);
    };

    if (!authenticated) {
        return (
            <div style={{ maxWidth: 400, margin: "auto", padding: 40 }}>
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                    <button type="submit">Login</button>
                </form>
                {message && <div style={{ color: "red" }}>{message}</div>}
            </div>
        );
    }

    // Debug output
    console.log("data:", data);
    console.log("section:", section);
    console.log("entries:", entries);

    return (
        <div style={{ maxWidth: 800, margin: "auto", padding: 40 }}>
            <h2>Menu Admin Editor</h2>
            <div>
                <label>Select section: </label>
                <select value={section} onChange={(e) => setSection(e.target.value)}>
                    <option value="">--Choose--</option>
                    {SECTIONS.map((sec) => (
                        <option key={sec} value={sec}>{sec}</option>
                    ))}
                </select>
            </div>
            {section && (
                <div style={{ marginTop: 30 }}>
                    <h3>Entries in {section}</h3>
                    <button onClick={handleAddNew} style={{ marginBottom: 20 }}>Add New Entry</button>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {entries.map((entry, idx) => (
                            <li key={entry?.id || idx} style={{
                                marginBottom: 20,
                                padding: 15,
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}>
                                {(editIndex === idx || editIndex === -1 && idx === entries.length) ? (
                                    <div>
                                        {Object.keys(entry).map((key) => {
                                            if (key === 'id') return null;

                                            if (key === 'alergenos') {
                                                return (
                                                    <div key={key} style={{ marginBottom: 15 }}>
                                                        <label style={{ display: 'block', marginBottom: 5 }}>Allergens:</label>
                                                        <AllergenCheckboxes
                                                            alergenos={editEntry.alergenos || {}}
                                                            onChange={(value) => handleChange(value, 'alergenos')}
                                                        />
                                                    </div>
                                                );
                                            }

                                            if (key === 'name') {
                                                if (section === 'tostas' || section === 'arepas') {
                                                    return (
                                                        <div key={key} style={{ marginBottom: 15 }}>
                                                            <label style={{ display: 'block', marginBottom: 5 }}>{key}:</label>
                                                            <input
                                                                name={key}
                                                                value={editEntry[key] || ''}
                                                                onChange={handleChange}
                                                                placeholder={`${key}`}
                                                                style={{ width: '100%' }}
                                                            />
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <div key={key} style={{ marginBottom: 15 }}>
                                                            <label style={{ display: 'block', marginBottom: 5 }}>{key}:</label>
                                                            <div style={{ display: 'flex', gap: 10 }}>
                                                                <input
                                                                    name={key}
                                                                    data-lang="es"
                                                                    value={editEntry[key]?.es || ''}
                                                                    onChange={handleChange}
                                                                    placeholder={`${key} (ES)`}
                                                                    style={{ flex: 1 }}
                                                                />
                                                                <input
                                                                    name={key}
                                                                    data-lang="en"
                                                                    value={editEntry[key]?.en || ''}
                                                                    onChange={handleChange}
                                                                    placeholder={`${key} (EN)`}
                                                                    style={{ flex: 1 }}
                                                                />
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            }

                                            if (key === 'ingredients') {
                                                return (
                                                    <div key={key} style={{ marginBottom: 15 }}>
                                                        <label style={{ display: 'block', marginBottom: 5 }}>{key}:</label>
                                                        <div style={{ display: 'flex', gap: 10 }}>
                                                            <input
                                                                name={key}
                                                                data-lang="es"
                                                                value={editEntry[key]?.es || ''}
                                                                onChange={handleChange}
                                                                placeholder={`${key} (ES)`}
                                                                style={{ flex: 1 }}
                                                            />
                                                            <input
                                                                name={key}
                                                                data-lang="en"
                                                                value={editEntry[key]?.en || ''}
                                                                onChange={handleChange}
                                                                placeholder={`${key} (EN)`}
                                                                style={{ flex: 1 }}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <div key={key} style={{ marginBottom: 15 }}>
                                                    <label style={{ display: 'block', marginBottom: 5 }}>{key}:</label>
                                                    <input
                                                        name={key}
                                                        value={editEntry[key] || ''}
                                                        onChange={(e) => {
                                                            // Only allow numbers and comma for price fields
                                                            if ((key === 'price' || key === 'tostaPrice' || key === 'pulgaPrice')) {
                                                                const value = e.target.value;
                                                                if (value === '' || /^[\d,]*$/.test(value)) {
                                                                    handleChange(e);
                                                                }
                                                            } else {
                                                                handleChange(e);
                                                            }
                                                        }}
                                                        onBlur={(e) => {
                                                            if ((key === 'price' || key === 'tostaPrice' || key === 'pulgaPrice')
                                                                && e.target.value
                                                                && !validatePrice(e.target.value)) {
                                                                setMessage('Price must be in format "X,XX" (e.g., "1,50")');
                                                                // Reset to previous valid value or empty
                                                                setEditEntry(prev => ({
                                                                    ...prev,
                                                                    [key]: prev[key] || ''
                                                                }));
                                                            } else {
                                                                setMessage('');
                                                            }
                                                        }}
                                                        style={{ width: '100%' }}
                                                    />
                                                </div>
                                            );
                                        })}
                                        <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                                            <button onClick={handleSave}>Save</button>
                                            <button onClick={() => {
                                                setEditIndex(null);
                                                setEditEntry(null);
                                                setMessage('');
                                            }}>Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div style={{ marginBottom: 10 }}>
                                            {Object.keys(entry).map((key) => {
                                                if (key === 'alergenos') {
                                                    return (
                                                        <div key={key}>
                                                            <b>Allergens:</b>{' '}
                                                            {Object.entries(entry[key])
                                                                .filter(([_, value]) => value)
                                                                .map(([allergen]) => allergen)
                                                                .join(', ')}
                                                        </div>
                                                    );
                                                }
                                                if (typeof entry[key] === "object") {
                                                    return (
                                                        <div key={key}>
                                                            <b>{key}:</b> ES: {entry[key].es}, EN: {entry[key].en}
                                                        </div>
                                                    );
                                                }
                                                if (key !== 'id') {
                                                    return (
                                                        <div key={key}>
                                                            <b>{key}:</b> {entry[key]}
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                        <div style={{ display: 'flex', gap: 10 }}>
                                            <button onClick={() => handleEdit(idx)}>Edit</button>
                                            <button onClick={() => handleDelete(idx)}>Delete</button>
                                            <button
                                                onClick={() => handleMove(idx, -1)}
                                                disabled={idx === 0}
                                            >↑ Move Up</button>
                                            <button
                                                onClick={() => handleMove(idx, 1)}
                                                disabled={idx === entries.length - 1}
                                            >↓ Move Down</button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {message && (
                <div style={{
                    color: message.includes('Error') ? 'red' : 'green',
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    padding: '10px 20px',
                    backgroundColor: '#f8f8f8',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    {message}
                </div>
            )}
        </div>
    );
}

export default Admin;
