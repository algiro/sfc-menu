import React from 'react';

import opcionVeganaIcon from '../../images/opcion_vegana.svg';

const VeganOptionIcon = ({ opcionVegana }) => {
    console.log('opcionVegana value:', opcionVegana); // Debug log
    if (!opcionVegana) {
        return null;
    }

    return (
        <div>
            <span className="allergen-icon-wrapper">Opcion</span>
            <span>
                <img
                    src={opcionVeganaIcon}
                    alt="Vegan Option"
                    className="vegan-option-icon"
                />
            </span>
        </div>
    );
};

export default VeganOptionIcon;