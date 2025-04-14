import React from 'react'
import BebidasMenu from './components/BebidasMenu'
import CafeMenu from './components/CafeMenu'
import NotaMenu from './components/NotaMenu'
import TostasMenu from './components/TostasMenu'
import ArepasMenu from './components/ArepasMenu'
import ReposteriaMenu from './components/ReposteriaMenu'
import CuencoMenu from './components/CuencoMenu'
import SmoothieMenu from './components/SmoothieMenu'
import divisionImg from '../images/division.svg'
import './styles/menu.css'
import { useLanguage } from './contexts/LanguageContext'
function App() {
    const { language } = useLanguage();
    return (
        <div>
            <CafeMenu lang={language} />
            <div className='menu-container centered-div'>
                <img src={divisionImg} className='filler-div' />
            </div>
            <BebidasMenu lang={language} />
            <NotaMenu
                text={language === 'es'
                    ? 'Pregunta por nuestras tartas y galletas del día'
                    : 'Ask about our cakes and cookies of the day'
                }
            />
            <ReposteriaMenu lang={language} />
            <div className='menu-container centered-div'>
                <img src={divisionImg} className='filler-div' />
            </div>
            <TostasMenu lang={language} />
            <div className='menu-container centered-div'>
                <img src={divisionImg} className='filler-div' />
            </div>
            <CuencoMenu lang={language} />
            <SmoothieMenu lang={language} />
            <ArepasMenu lang={language} />
        </div>
    )


}
export default App
