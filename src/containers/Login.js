import React, { useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';
import { Box, Link, Grid, Typography, Container, Checkbox, Button, TextField } from "@mui/material";
import { DefaultInstance } from "../utils/DefaultInstance";
import { useNavigate, useLocation} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setAuthState } from "../actions/auth.actions";
export const Login = (Props) => {
    const [credential,setCredential] = useState('');
    const [pass, setPass] = useState('');

    // const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname||"/";


    const handleSubmit = (e) => {
        e.preventDefault();
        DefaultInstance.post('auth/login',{"credential":credential,
        "password":pass})
        .then( response =>{
            //This happens after a successful response
            console.log("worked")
            console.log(response.data)
            // dispatch(set)
            // navigate(from, { replace: true})
        }

        ).catch(
            //This happens if unsuccessful or error
            console.log("failed")
        )
    }

    
    // const dispatch = useDispatch()
    // const data = useSelector(state =>state.reducerName.property)

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

