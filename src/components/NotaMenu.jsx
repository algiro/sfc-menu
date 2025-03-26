import React from 'react';
import divisionImg from '../../images/division.svg';
import '../styles/menu.css';

const NotaMenu = ({ text }) => {
    return (
        <div>
            <div className='menu-container centered-div'><img src={divisionImg} className='filler-div' /></div>
            <div className='menu-container centered-div nota-menu'>
                {text}
            </div>
            <div className='menu-container centered-div'><img src={divisionImg} className='filler-div' /></div>
        </div>
    );
};

export default NotaMenu;