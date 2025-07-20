import React from 'react';

const ALLERGENS = [
    { id: 'frutoSecos', label: 'Frutos Secos' },
    { id: 'gluten', label: 'Gluten' },
    { id: 'sesamo', label: 'Sésamo' },
    { id: 'huevo', label: 'Huevo' },
    { id: 'lacteos', label: 'Lácteos' },
    { id: 'vegan', label: 'Vegan' }
];

const AllergenCheckboxes = ({ alergenos = {}, onChange }) => {
    const handleChange = (allergenId) => {
        const updatedAlergenos = {
            ...alergenos,
            [allergenId]: !alergenos[allergenId]
        };
        onChange(updatedAlergenos);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
            {ALLERGENS.map(({ id, label }) => (
                <label key={id} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <input
                        type="checkbox"
                        checked={alergenos?.[id] || false}
                        onChange={() => handleChange(id)}
                    />
                    {label}
                </label>
            ))}
        </div>
    );
};

export default AllergenCheckboxes;
