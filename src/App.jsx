import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { getUserLogged, putAccessToken } from '../src/utils/api'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddNotesPage from './pages/AddNotesPage';
import LocaleContext from './contexts/LocaleContext';
import ThemeContext from './contexts/ThemeContext';
import Spinner from './components/Spinner';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState('id');
  const [theme, setTheme] = useState('light');


  React.useEffect(() => {
    getUserLogged().then(({ data }) => { setAuthedUser(data); setInitializing(false); });
  }, [])

  function toggleLocale() {
    setLocale((prevState) => { return prevState == 'id' ? 'en' : 'id' })
  }

  function toggleTheme() {
    setTheme((prevState) => { return prevState == 'light' ? 'dark' : 'light' }
    )
  }

  const contextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale
    }
  }, [locale])

  const themeValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme
    }
  }, [theme])

  function onLogout() {
    localStorage.removeItem('accessToken');
    setAuthedUser(null);
  }

  function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken)
    getUserLogged().then(setAuthedUser);
  }

  if (initializing) {
    return <Spinner />
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeValue}>
        <LocaleContext.Provider value={contextValue}>
          <div className="app-container" data-theme={theme}>
            <header>
              <h1><a href="/">{locale == 'id' ? 'Aplikasi Catatan' : 'Notes App'}</a></h1>
              <button className='toggle-locale' type='button' onClick={toggleLocale}>
                {locale == 'en' ? 'id' : 'en'}
              </button>
              <button className='toggle-theme' type='button' onClick={toggleTheme}>
                {theme == 'light' ? 'Hitamkan' : 'Putihkan'}
              </button>
            </header>
            <main>
              <Routes>
                <Route path='/*' element={<LoginPage onLoginSuccess={onLoginSuccess} />} />
                <Route path='/register' element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>

    )
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={contextValue}>
        <div className="app-container" data-theme={theme}>
          <header>
            <Navigation onLogout={onLogout} nama={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/archives' element={<ArchivePage />} />
              <Route path='notes/:id' element={<DetailPage />} />
              <Route path='archives/notes/:id' element={<DetailPage />} />
              <Route path='notes/new' element={<AddNotesPage />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
