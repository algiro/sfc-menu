import React from 'react';
import { bebidas } from '../data/menuData';
import bebidaImg from '../../images/bebidas.svg';
import '../styles/menu.css';

const CafeMenu = () => {
  return (
    <div
      className="min-h-screen p-8 text-amber-400"
      style={{
        backgroundColor: '#0A6275',
        backgroundImage: `url(${bebidaImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: '400px', // default size for large screens
        '@media (max-width: 768px)': {
          backgroundSize: '200px', // medium screens
        },
        '@media (max-width: 480px)': {
          backgroundSize: '120px', // small screens
        }
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h1>BEBIDAS</h1>
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
