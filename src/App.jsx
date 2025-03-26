import React from 'react'
import BebidasMenu from './components/BebidasMenu'
import CafeMenu from './components/CafeMenu'
import divisionImg from '../images/division.svg';

function App() {
    return (
        <div>
            <BebidasMenu />
            <div><img src={divisionImg} /></div>
            <CafeMenu />
        </div>
    )
}

export default App
