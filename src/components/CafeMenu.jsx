import React from 'react';
import { cafes } from '../data/menuData';
import { te } from '../data/menuData';

import cafeGrande from '../../images/cafe-grande.svg';
import infusiones from '../../images/infusiones.svg';
import '../styles/menu.css';

const CafeMenu = () => {
  return (
    <div id="cafe-id">
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
          <div className="note-item" style={{ textAlign: 'center' }}>EXTRA DE LECHE + 0,30€</div>
          <div className="note-item" style={{ textAlign: 'center' }}>EXTRA DE BEBIDA VEGETAL + 0,35€</div>
          <div className="note-item" style={{ textAlign: 'center' }}>EXTRA Descafeinado + 0,35€</div>
        </div>
      </div>

      <div id="te-id"
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
        </div>
      </div>
    </div>

  );
};

export default CafeMenu;
