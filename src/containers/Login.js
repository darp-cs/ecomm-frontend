import React, { useEffect, useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';
import { Box, Link, Grid, Typography, Container, Checkbox, Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { DefaultInstance } from "../utils/DefaultInstance";
import { sendLogin } from "../actions/auth.actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { setAuthToken,authToken } from "../reducers/auth.reducer";
import { useNavigate } from "react-router-dom";
export const Login = (props) => {
    const [credential,setCredential] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const validateFields = () =>{

    }

    const sendLogin = (credential,password)=>{
        DefaultInstance.post('auth/login', {"credential":credential,
        "password":password})
        .then(response=>{
            dispatch(setAuthToken(response.data.authToken))
            navigate('/')
        })
        .catch(error => {
            console.log('error',error)
        })
        
    }
    const handleSubmit = () =>{
        sendLogin(credential,pass)
    }

    
    return(
        <Container component="main" maxWidth="xs">
            <Box>
                <TextField
                required
                fullWidth
                id ="username"
                name="username"
                label="Username"
                defaultValue="Username"
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
                variant="contained"
                onClick={handleSubmit}
                >
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
