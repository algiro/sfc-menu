import React from 'react';
import { tostas } from '../data/menuData';
import tostasImg from '../../images/tostas.svg';
import '../styles/menu.css';
import AllergenIcons from './MenuItemAllergens'
import VeganOptionIcon from './VeganOption'

const TwoColumnMenu = () => {
    // Calculate the split point for the columns
    const totalItems = tostas.length;
    const firstColumnCount = Math.ceil(totalItems / 2);

    // Split the array into two columns
    const firstColumn = tostas.slice(0, firstColumnCount);
    const secondColumn = tostas.slice(firstColumnCount);

    // Component for rendering a single menu column
    const MenuColumn = ({ items }) => (
        <ul className="space-y-4">
            {items.map(tostas => (
                <li key={tostas.id} className="menu-item">
                    <div className="menu-item-container"> {/* Main container for the item */}
                        {/* Name and allergens in one line */}
                        <div className="menu-item-header">
                            <span className="item-name">{tostas.name}</span>
                            {tostas.alergenos && <AllergenIcons alergenos={tostas.alergenos} />}
                        </div>
                        {/* Ingredients */}
                        <div className="item-ingredients">{tostas.ingredients}</div>
                        {/* Prices */}
                        <div className="menu-item-price">
                            <span className="item-note">Tosta</span>
                            <span className="item-price">{tostas.tostaPrice} €</span>
                            <span className="item-note">Pulga</span>
                            <span className="item-price">{tostas.pulgaPrice} €</span>
                        </div>
                        <div className="menu-item-price">
                            {tostas.opcionVegana && <VeganOptionIcon opcionVegana={tostas.opcionVegana} />}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );


    return (
        <div id="tostas-id"
            className="min-h-screen p-8 text-amber-400 menu-container centered-div"
            style={{
                '--bg-image': `url(${tostasImg})`
            }}
        >
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold mb-8">TOSTAS</h1>
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
                <div className="note-item" style={{ textAlign: 'center' }}>*Aove: Aceite de Oliva Virgen Extra </div>
                <div className="note-item" style={{ textAlign: 'center' }}>  ●  ●  ●  ●  ●  ● </div>
                <div className="note-item" style={{ textAlign: 'center' }}>EXTRA PAN SIN GLUTEN + 0,50€</div>
            </div>

        </div >
    );
};

export default TwoColumnMenu;
