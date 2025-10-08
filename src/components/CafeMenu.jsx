
import React, { useEffect, useState } from 'react';
import cafeGrande from '../../images/cafe-grande.svg';
import infusiones from '../../images/infusiones.svg';
import '../styles/menu.css';


const CafeMenu = ({ lang = 'es' }) => {
  const [cafes, setCafes] = useState([]);
  const [te, setTe] = useState([]);

  useEffect(() => {
    fetch('/api/menuData')
      .then(res => res.json())
      .then(data => {
        setCafes(data.cafes || []);
        setTe(data.te || []);
      });
  }, []);

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
              {cafes.map(cafe => (
                <li key={cafe.id} className="menu-item">
                  <div className="flex justify-between items-baseline">
                    <div className="item-name">{cafe.name[lang]}</div>
                    <div className="item-price">{cafe.price} €</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="note-item" style={{ textAlign: 'center' }}>EXTRA DE LECHE + 0,30€</div>
          <div className="note-item" style={{ textAlign: 'center' }}>EXTRA DE BEBIDA VEGETAL + 0,30€</div>
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
              {te.map(teItem => (
                <li key={teItem.id} className="menu-item">
                  <div className="flex justify-between items-baseline">
                    <div className="item-name">{teItem.name[lang]}</div>
                    <div className="item-price">{teItem.price} €</div>
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
