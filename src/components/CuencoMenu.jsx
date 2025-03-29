import React from 'react';
import smoothieImg1 from '../../images/smoothie_1.png';
import smoothieImg2 from '../../images/smoothie_2.png';
import '../styles/menu.css';

const CuencoMenu = () => {
  return (
    <div
      className="min-h-screen p-8 text-amber-400 menu-container centered-div reduced-padding"
    >
      <div className="max-w-2xl mx-auto">
        <div className="two-column-layout">
          <div className="column menu-content">
            <h1 className='section-title'>CUENCOS</h1>
            <div className="item-price"> 5,00€</div>
            <div className="cuenco-note"> Todos nuestros cuencos incluyen cream de frutos secos naturales y semillas. Recuerda svisarnos de cualcquier alergia o intolerancia</div>
          </div>
          <div className="column">
            <div className="cuenco-note"> 1) Elige la base que mas the guste: yogur (griego o vegetail) o Acai (+ 0,70)€</div>
            <div className="cuenco-note"> 2) Elige el cereal que mas te guste: avena, espelta, cereal sin gluten, muesli o mix de cereal inflado</div>
            <div className="cuenco-note"> 3) Elige frutas de temporada</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuencoMenu;
