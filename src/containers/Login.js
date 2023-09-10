import React, { useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';

export const Login = (Props) => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    // const dispatch = useDispatch()
    // const data = useSelector(state =>state.reducerName.property)
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}> 
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setPass(e.target.value)} type="email" placeholder="youremail@gmail.com"/>
                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id='password' name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => Props.onFormSwitch('register')}>Don't have an account? Register now</button>
        </div>
    )
}