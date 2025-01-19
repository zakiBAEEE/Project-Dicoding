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

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  React.useEffect(() => {
    getUserLogged().then(setAuthedUser);
    setInitializing(false)
  }, [])

  function onLogout() {
    localStorage.removeItem('accessToken');
    setAuthedUser(null);
  }

  function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken)
    getUserLogged().then(setAuthedUser);
  }

  if (initializing) {
    return null
  }

  if (authedUser == null) {
    return (
      <main>
        <Routes>
          <Route path='/*' element={<LoginPage onLoginSuccess={onLoginSuccess} />} />
        </Routes>
      </main>
    )
  }


}

export default App;
