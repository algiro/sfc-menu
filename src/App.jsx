import React from 'react'
import BebidasMenu from './components/BebidasMenu'
import CafeMenu from './components/CafeMenu'
import NotaMenu from './components/NotaMenu'
import TostasMenu from './components/TostasMenu'

import divisionImg from '../images/division.svg'
import './styles/menu.css'

function App() {
    return (
        <div>

            <BebidasMenu />
            <div className='menu-container centered-div'><img src={divisionImg} className='filler-div' /></div>
            <CafeMenu />
            <NotaMenu text='Pregunta por nuestras tartas y galletas del día' />
            <TostasMenu />
        </div >
    )
}

export default App
