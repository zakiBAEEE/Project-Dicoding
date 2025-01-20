import React from 'react'
import useInput from '../customHooks/useInput'
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/api';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
    const [email, onChangeEmail] = useInput();
    const [name, onChangeName] = useInput();
    const [password, onChangePassword] = useInput();
    const [confirmPassword, onChangeConfirmPassword] = useInput();
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext);

    async function onRegisterHandler(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            const { error } = await register({ name, email, password });
            if (!error) {
                navigate('/');
            }
        }
        else {
            alert('Password Harus Konsisisten coyy!!!')
        }
    }

    return (
        <div className="register-page">
            <div className='input-register'>
                <h1>{locale == 'id' ? 'Daftar' : 'Register'}</h1>
                <label htmlFor='name'>{locale == 'id' ? 'Nama' : 'Name'}</label>
                <input type="text" id='name' value={name} onChange={onChangeName} />
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' value={email} onChange={onChangeEmail} />
                <label htmlFor='password'>Password</label>
                <input type="password" id='password' value={password} onChange={onChangePassword} />
                <label htmlFor='confirmpw'> {locale == 'id' ? 'Konfirmasi Password' : 'Confirm Password'}</label>
                <input type="password" id='confirmpw' value={confirmPassword} onChange={onChangeConfirmPassword} />
                <button type='button' onClick={onRegisterHandler}>Daftar</button>
                {
                    locale == 'id' ? <p>Kembali ke <Link to='/'>Masuk</Link></p> : <p>Return To <Link to='/'>Login</Link></p>
                }

            </div>
        </div>
    )
}

export default RegisterPage