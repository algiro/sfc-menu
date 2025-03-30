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
            <div className="cuenco-note"> Todos nuestros cuencos incluyen crema de frutos secos naturales y semillas. Recuerda avisarnos de cualquier alergia o intolerancia</div>
          </div>
          <div className="column">
            <div className="cuenco-note"><span class="note-number"> 1) </span> <span> Elige la base que más te guste: yogur (griego o vegetal) o Açai (+ 0,70 €) </span> </div>
            <div className="cuenco-note"><span class="note-number"> 2) </span> <span> Elige el cereal que más te guste: avena, espelta, cereal sin gluten, muesli o mix de cereal inflado </span> </div>
            <div className="cuenco-note"><span class="note-number"> 3) </span> <span> Elige frutas de temporada </span> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuencoMenu;
