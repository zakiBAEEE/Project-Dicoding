import React from 'react'
import useInput from '../customHooks/useInput'
import { login } from '../utils/api';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ onLoginSuccess }) {
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const { locale } = React.useContext(LocaleContext);
    async function onLoginHandler(e) {
        e.preventDefault();
        const { error, data } = await login({ email, password });

        if (!error) {
            onLoginSuccess(data)
        }
    }

    return (
        <section className='login-page'>
            {
                locale == 'id' ? <h2>Yuk, Masuk untuk menggunakan aplikasi</h2> : <h2>Come on, Login to Use App</h2>
            }

            <div className="input-login">
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' value={email} onChange={onChangeEmail} />
                <label htmlFor='password'> Password</label>
                <input type="password" id='password' value={password} onChange={onChangePassword} />
                <button type='button' onClick={onLoginHandler}>Login</button>
            </div>
            {
                locale == 'id' ? <p>Belum punya akun? <a href="/register">Daftar Disini</a></p> : <p>Dont't Have An Account? <a href="/register">Register Here</a></p>
            }

        </section>
    )
}

export default LoginPage