import React from 'react';
import { tostas } from '../data/menuData';
import tostasImg from '../../images/tostas.svg';
import '../styles/menu.css';

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
                    <div className="flex justify-between items-baseline">
                        <div className="item-name">{tostas.name}</div>
                        <div className="item-ingredients">{tostas.ingredients}</div>
                        <div><span className='item-note'>Tosta </span> <span className="item-price"> {tostas.tostaPrice} €</span>  <span className='item-note'> Pulga </span><span className="item-price"> {tostas.pulgaPrice} €</span></div>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div
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
            </div>
        </div >
    );
};

export default TwoColumnMenu;
