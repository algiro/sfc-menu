import React from 'react'
import BebidasMenu from './components/BebidasMenu'
import CafeMenu from './components/CafeMenu'
import divisionImg from '../images/division.svg';
import './styles/menu.css';
function App() {
    return (
        <div>

            <BebidasMenu />
            <div className='menu-container centered-div'><img src={divisionImg} className='filler-div' /></div>
            <CafeMenu />
        </div >
    )
}

export default App
