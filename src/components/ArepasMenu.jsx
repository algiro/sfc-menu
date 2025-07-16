
import React, { useEffect, useState } from 'react';
import arepasHeaderImg from '../../images/arepas_title.png';
import arepasBackgroundImg from '../../images/back_arepas.png';
import '../styles/menu.css';
import AllergenIcons from './MenuItemAllergens';


const ArepasMenu = ({ lang = 'es' }) => {
    const [arepas, setArepas] = useState([]);

    useEffect(() => {
        fetch('/api/menuData')
            .then(res => res.json())
            .then(data => setArepas(data.arepas || []));
    }, []);

    // Calculate the split point for the columns
    const totalItems = arepas.length;
    const firstColumnCount = Math.ceil(totalItems / 2);
    const firstColumn = arepas.slice(0, firstColumnCount);
    const secondColumn = arepas.slice(firstColumnCount);

    // Component for rendering a single menu column
    const MenuColumn = ({ items }) => (
        <ul className="space-y-4">
            {items.map(arepa => (
                <li key={arepa.id} className="menu-item">
                    <div className="menu-item-container">
                        <div className="menu-item-header">
                            <span className="item-arepas-name">{arepa.name}</span>
                            {arepa.alergenos && <AllergenIcons alergenos={arepa.alergenos} />}
                        </div>
                        <div className="item-arepas-ingredients">{arepa.ingredients[lang]}</div>
                        <div className="menu-item-price">
                            <span className="item-arepas-price">{arepa.price} €</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div id="arepas-id">
            <div
                className="min-h-screen p-8 text-amber-400 menu-arepas-header centered-div"
                style={{
                    '--bg-image': `url(${arepasHeaderImg})`
                }}
            />
            <div
                className="min-h-screen p-8 text-amber-400 menu-arepas-container centered-div"
                style={{
                    '--bg-image': `url(${arepasBackgroundImg})`
                }}
            >
                <div className="max-w-2xl mx-auto">
                    <div className="two-column-layout">
                        <div className="column">
                            <MenuColumn items={firstColumn} />
                        </div>
                        <div className="column">
                            <MenuColumn items={secondColumn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArepasMenu;
