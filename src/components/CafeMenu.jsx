import React from 'react';
import { cafes } from '../data/menuData';
import { te } from '../data/menuData';

import cafeGrande from '../../images/cafe-grande.svg';
import infusiones from '../../images/infusiones.svg';
import '../styles/menu.css';

const CafeMenu = () => {
  return (
    <div>
      <div
        className="min-h-screen p-8 text-amber-400 menu-container centered-div"
        style={{
          '--bg-image': `url(${cafeGrande})`
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className='section-title'>CAFÈ</h1>
          <div className="mb-8">
            <ul className="space-y-4">
              {cafes
                .map(cafes => (
                  <li key={cafes.id} className="menu-item">
                    <div className="flex justify-between items-baseline">
                      <div className="item-name">{cafes.name}</div>
                      <div className="item-price">{cafes.price} €</div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </div>

      <div
        className="min-h-screen p-8 text-amber-400 menu-container centered-div"
        style={{
          '--bg-image': `url(${infusiones})`
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className='section-title'>Té e Infusiones</h1>
          <div className="mb-8">
            <ul className="space-y-4">
              {te
                .map(te => (
                  <li key={te.id} className="menu-item">
                    <div className="flex justify-between items-baseline">
                      <div className="item-name">{te.name}</div>
                      <div className="item-price">{te.price} €</div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="item-name">EXTRA DE LECHE + 0,30€</div>
          <div className="item-name">EXTRA DE LECHE VEGETAL + 0,30€</div>
        </div>
      </div>
    </div>

  );
};

export default CafeMenu;
