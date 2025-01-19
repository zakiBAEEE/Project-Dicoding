import React from 'react'
import useInput from '../customHooks/useInput'
import { login } from '../utils/api';

function LoginPage({ onLoginSuccess }) {
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();

    async function onLoginHandler(e) {
        e.preventDefault();
        const { error, data } = await login({ email, password });

        if (!error) {
            onLoginSuccess(data)
        }
    }

    return (
        <section className='login-page'>
            <h2>Yuk, login untuk menggunakan aplikasi</h2>
            <div className="input-login">
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' value={email} onChange={onChangeEmail} />
                <label htmlFor='password'> Password</label>
                <input type="password" id='password' value={password} onChange={onChangePassword} />
                <button type='button' onClick={onLoginHandler}>Login</button>
            </div>
            {/* <p>Belum punya akun? <a href="/register">Daftar Disini</a></p> */}
        </section>
    )
}

export default LoginPage