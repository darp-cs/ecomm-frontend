import React, { useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';
import { Box, Link, Grid, Typography, Container, Checkbox, Button, TextField } from "@mui/material";
import { defaultInstance } from "../utils/Axios";
import { useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setAuthToken, setIsAuth } from "../reducers/auth.reducer";
export const Login = (props) => {
    const [credential,setCredential] = useState('');
    const [pass, setPass] = useState('');

    // const { authToken } = useSelector((state) => state.authenticator.authToken);
    const authToken = useSelector((state)=> state.auth.authToken);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname||"/home";

    const handleSubmit = (e) => {
        e.preventDefault();
        defaultInstance.post('auth/login',{"credential":credential,
        "password":pass})
        .then( response =>{
            //This happens after a successful response
            dispatch(setAuthToken(response.data.authToken))
            dispatch(setIsAuth(true))
            //Navigate to either home or page user was trying to visit when they were redirected to login
            navigate(from, { replace: true})
        })
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                required
                fullWidth
                id ="username"
                name="username"
                label="Username"
                defaultValue="Username or Email"
                autoFocus
                margin="normal"
                value={credential}
                onChange={(e)=>{
                    setCredential(e.target.value)
                }}
                />
                <TextField
                required
                fullWidth
                id ="password"
                name="password"
                label="Password"
                defaultValue="********"
                margin="normal"
                value={pass}
                onChange={(e)=>{
                    setPass(e.target.value)
                }}
                />

                <Button
                type="submit"
                variant="contained">
                    Sign In
                </Button>

            </Box>

                <Link href="#" color="inherit"
                    component="button"
                    variant="body2"
                    onClick={() => {console.info("Create an Account");
                    }}
                >
                    Create an Account                    
                </Link>

        </Container>
    )
}

