import React, { useState } from "react";
import { Box, Link, Grid, Typography, Container, Checkbox, Button, TextField } from "@mui/material";
import { DefaultInstance } from "../utils/DefaultInstance";

export const Register = (Props) => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}> 
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" id="name" placeholder="full Name" />
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"/>
                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id='password' name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => Props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}