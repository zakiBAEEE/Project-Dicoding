import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LocaleContext from '../contexts/LocaleContext'
import ThemeContext from '../contexts/ThemeContext'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { FaLanguage } from 'react-icons/fa'
import { FaDoorOpen } from 'react-icons/fa'

function Navigation({ onLogout, nama }) {
    const { locale, toggleLocale } = React.useContext(LocaleContext)
    const { theme, toggleTheme } = React.useContext(ThemeContext)
    return (
        <>
            <h1>
                {
                    locale == 'id' ? <Link to={'/'}>Aplikasi Catatan</Link> : <Link to={'/'}>Notes App</Link>
                }
            </h1>
            <nav className='navigation'>
                <ul>
                    <li>
                        <Link to={'/archives'}>Arsip</Link>
                    </li>
                </ul>
            </nav>
            <button className='toggle-locale' type='button' onClick={toggleLocale}>
                <FaLanguage />
            </button>
            <button className='toggle-theme' onClick={toggleTheme}>{theme == 'light' ? <FaMoon /> : <FaSun />}</button>
            <button className='button-logout' onClick={onLogout}> <FaDoorOpen /> {nama} </button>
        </>
    )
}

export default Navigation