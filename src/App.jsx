import React from 'react'
import BebidasMenu from './components/BebidasMenu'
import CafeMenu from './components/CafeMenu'
import NotaMenu from './components/NotaMenu'
import TostasMenu from './components/TostasMenu'
import ArepasMenu from './components/ArepasMenu'
import ReposteriaMenu from './components/ReposteriaMenu'

import divisionImg from '../images/division.svg'
import './styles/menu.css'

function App() {
    return (
        <div>
            <CafeMenu />
            <div className='menu-container centered-div'><img src={divisionImg} className='filler-div' /></div>
            <BebidasMenu />
            <NotaMenu text='Pregunta por nuestras tartas y galletas del día' />
            <ReposteriaMenu />
            <div className='menu-container centered-div'><img src={divisionImg} className='filler-div' /></div>
            <TostasMenu />
            <div className='menu-container centered-div'><img src={divisionImg} className='filler-div' /></div>
            <ArepasMenu />
        </div >
    )
}

export default App
