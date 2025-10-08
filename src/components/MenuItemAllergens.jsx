import React from 'react';
// Import your images
import frutosSevosIcon from '../../images/al_frutos_secos.svg';
import glutenIcon from '../../images/al_gluten.svg';
import sesamoIcon from '../../images/al_sesamo.svg';
import huevoIcon from '../../images/al_huevo.svg';
import lacteosIcon from '../../images/al_lacteos.svg';
import sojaIcon from '../../images/al_soja.svg';
import veganIcon from '../../images/vegan.svg';

const AllergenIcons = ({ alergenos }) => {
    if (!alergenos) {
        return null;
    }

    const allergenConfig = {
        frutoSecos: {
            icon: frutosSevosIcon,
            label: 'Frutos Secos',
        },
        gluten: {
            icon: glutenIcon,
            label: 'Gluten',
        },
        sesamo: {
            icon: sesamoIcon,
            label: 'Sésamo',
        },
        huevo: {
            icon: huevoIcon,
            label: 'Huevo',
        },
        lacteos: {
            icon: lacteosIcon,
            label: 'Lacteos',
        },
        soja: {
            icon: sojaIcon,
            label: 'Soja',
        },
        vegan: {
            icon: veganIcon,
            label: 'Vegan',
        },

    };

    return (
        <span className="allergen-icons-container"> {/* Changed to span */}
            {Object.entries(alergenos).map(([key, value]) => {
                if (value && allergenConfig[key]) {
                    return (
                        <span
                            key={key}
                            className="allergen-icon-wrapper"
                        >
                            <img
                                src={allergenConfig[key].icon}
                                alt={allergenConfig[key].label}
                                className="allergen-icon"
                            />
                            <span className="allergen-tooltip">
                                {allergenConfig[key].label}
                            </span>
                        </span>
                    );
                }
                return null;
            })}
        </span>
    );
};


export default AllergenIcons;
