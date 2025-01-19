import React from 'react'
import useInput from '../customHooks/useInput'
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [email, onChangeEmail] = useInput();
    const [name, onChangeName] = useInput();
    const [password, onChangePassword] = useInput();
    const [confirmPassword, onChangeConfirmPassword] = useInput();
    const navigate = useNavigate();

    async function onRegisterHandler(e) {
        e.preventDefault();
        const { error } = await register({ name, email, password });
        if (!error) {
            navigate('/');
        }
    }

    return (
        <div className="register-page">
            <h1>Register</h1>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name' value={name} onChange={onChangeName} />
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' value={email} onChange={onChangeEmail} />
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' value={password} onChange={onChangePassword} />
            <label htmlFor='confirmpw'> Confirm Password</label>
            <input type="password" id='confirmpw' value={confirmPassword} onChange={onChangeConfirmPassword} />
            <button type='button' onClick={onRegisterHandler}>Daftar</button>
            <p>Kembali ke <Link to='/'>Masuk</Link></p>
        </div>
    )
}

export default RegisterPage