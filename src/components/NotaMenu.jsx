import React from 'react';
import divisionImg from '../../images/division.svg';
import leftNoteImg from '../../images/left_note_deco.svg';
import rightNoteImg from '../../images/right_note_deco.svg';
import '../styles/menu.css';

const NotaMenu = ({ text }) => {
    return (
        <div className="menu-container centered-div no-padding">
            <span className="note-img">
                <img src={leftNoteImg} alt="Left Note" />
            </span>
            <span className="menu-content">
                <div className="centered-div no-padding">
                    <img src={divisionImg} className="filler-div" alt="Divider" />
                </div>
                <div className="centered-div nota-menu">
                    {text}
                </div>
                <div className="centered-div">
                    <img src={divisionImg} className="filler-div" alt="Divider" />
                </div>
            </span>
            <span className="note-img">
                <img src={rightNoteImg} alt="Right Note" />
            </span>
        </div>
    );
};

export default NotaMenu;