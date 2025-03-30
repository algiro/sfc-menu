import React from 'react';
import { arepas } from '../data/menuData';
import arepasHeaderImg from '../../images/arepas_title.png';
import arepasBackgroundImg from '../../images/arepas_background.png';
import '../styles/menu.css';
import AllergenIcons from './MenuItemAllergens'

const TwoColumnMenu = () => {
    // Calculate the split point for the columns
    const totalItems = arepas.length;
    const firstColumnCount = Math.ceil(totalItems / 2);

    // Split the array into two columns
    const firstColumn = arepas.slice(0, firstColumnCount);
    const secondColumn = arepas.slice(firstColumnCount);

    // Component for rendering a single menu column
    const MenuColumn = ({ items }) => (
        <ul className="space-y-4">
            {items.map(arepas => (
                <li key={arepas.id} className="menu-item">
                    <div className="menu-item-container"> {/* Main container for the item */}
                        {/* Name and allergens in one line */}
                        <div className="menu-item-header">
                            <span className="item-arepas-name">{arepas.name}</span>
                            {arepas.alergenos && <AllergenIcons alergenos={arepas.alergenos} />}
                        </div>
                        {/* Ingredients */}
                        <div className="item-arepas-ingredients">{arepas.ingredients}</div>
                        {/* Prices */}
                        <div className="menu-item-price">
                            <span className="item-arepas-price">{arepas.price} €</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );


    return (
        <div id="arepas-id"
            className="min-h-screen p-8 text-amber-400 menu-arepas-container centered-div"
            style={{
                '--bg-image': `url(${arepasHeaderImg})`
            }}
        >

            <div className="max-w-2xl mx-auto arepas-list">
                <div className="avoid-overlap">   </div>
                {/* Two-column layout */}
                <div className="two-column-layout">
                    <div className="column">
                        <MenuColumn items={firstColumn} />
                    </div>
                    <div className="column">
                        <MenuColumn items={secondColumn} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TwoColumnMenu;
