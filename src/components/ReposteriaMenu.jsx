import React from 'react';
import { bebidas } from '../data/menuData';
import reposteriaImg from '../../images/reposteria_back.png';
import '../styles/menu.css';

const ReposteriaMenu = () => {
  return (
    <div
      className="min-h-screen p-8 text-amber-400 menu-reposteria-container centered-div"
      style={{
        '--bg-image': `url(${reposteriaImg})`
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="reposteria-note">REPOSTERÍA ARTESANAL</div>
        <div className="reposteria-note">PASTELERÍA VEGANA,</div>
        <div className="reposteria-note">SIN GLUTEN Y SIN AZUCAR</div>
        <div className="reposteria-note">HELADO ARTESANAL</div>
      </div>
    </div>
  );
};

export default ReposteriaMenu;
