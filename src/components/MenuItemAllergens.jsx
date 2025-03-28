import React from 'react';
// Import your images
import frutosSevosIcon from '../../images/al_frutos_secos.svg';
import glutenIcon from '../../images/al_gluten.svg';
import sesamoIcon from '../../images/al_sesamo.svg';

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
