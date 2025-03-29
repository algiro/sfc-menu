import React from 'react';
import smoothieImg1 from '../../images/smoothie_1.png';
import smoothieImg2 from '../../images/smoothie_2.png';
import '../styles/menu.css';

const SmoothieMenu = () => {
  return (
    <div
      className="min-h-screen p-8 text-amber-400 menu-smoothie-container centered-div reduced-padding"
      style={{
        '--bg-image': `url(${smoothieImg1})`
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className='section-title'>SMOOTHIE</h1>
        <div className="item-price"> 3,90 € (0,38 cl) / 4,90 € (0,50 cl)</div>
        <div className="cuenco-note"> 1. Plátano, remolacha y jengibre</div>
        <div className="cuenco-note"> 2. Arándanos, platano, piña y jengibre</div>
        <div className="cuenco-note"> 3. Frutos rojos, remolacha y naranja</div>
        <div className="cuenco-note"> 4. Pera, fresa, mango y un toque de pimienta</div>
        <div className="cuenco-note"> 5. Pera, kiwi y pulpa de guanábana</div>
        <div className="cuenco-note"> 6. Piña, plátano y leche de coco</div>
        <div className="cuenco-note"> 7. Papaya, naranja y fresa</div>
        <div className="cuenco-note"> 8. Plátano, fresa y naranja</div>
      </div>
    </div>
  );
};

export default SmoothieMenu;
