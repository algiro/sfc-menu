
import React, { useEffect, useState } from 'react';
import tostasImg from '../../images/tostas.svg';
import '../styles/menu.css';
import AllergenIcons from './MenuItemAllergens';
import VeganOptionIcon from './VeganOption';


const TostasMenu = ({ lang = 'es' }) => {
    const [tostas, setTostas] = useState([]);

    useEffect(() => {
        fetch('/api/menuData')
            .then(res => res.json())
            .then(data => setTostas(data.tostas || []));
    }, []);

    // Calculate the split point for the columns
    const totalItems = tostas.length;
    const firstColumnCount = Math.ceil(totalItems / 2);
    const firstColumn = tostas.slice(0, firstColumnCount);
    const secondColumn = tostas.slice(firstColumnCount);

    // Component for rendering a single menu column
    const MenuColumn = ({ items }) => (
        <ul className="space-y-4">
            {items.map(tosta => (
                <li key={tosta.id} className="menu-item">
                    <div className="menu-item-container">
                        <div className="menu-item-header">
                            <span className="item-name">{tosta.name}</span>
                            {tosta.alergenos && <AllergenIcons alergenos={tosta.alergenos} />}
                        </div>
                        <div className="item-ingredients">{tosta.ingredients[lang]}</div>
                        <div className="menu-item-price">
                            <span className="item-note">Tosta</span>
                            <span className="item-price">{tosta.tostaPrice} €</span>
                            <span className="item-note">Pulga</span>
                            <span className="item-price">{tosta.pulgaPrice} €</span>
                        </div>
                        <div className="menu-item-price">
                            {tosta.opcionVegana && <VeganOptionIcon opcionVegana={tosta.opcionVegana} />}
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
        </div>
    );
};

export default TostasMenu;
