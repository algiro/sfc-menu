import React from 'react';
import { bebidas } from '../data/menuData';
import bebidaImg from '../../images/bebidas.svg';
import '../styles/menu.css';

const CafeMenu = () => {
  return (
    <div id="bebidas-id"
      className="min-h-screen p-8 text-amber-400 menu-container centered-div"
      style={{
        '--bg-image': `url(${bebidaImg})`
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className='section-title'>BEBIDAS</h1>
        <div className="mb-8">
          <ul className="space-y-4">
            {bebidas
              .map(beverage => (
                <li key={beverage.id} className="menu-item">
                  <div className="flex justify-between items-baseline">
                    <div className="item-name">{beverage.name}</div>
                    <div className="item-price">{beverage.price} €</div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CafeMenu;
