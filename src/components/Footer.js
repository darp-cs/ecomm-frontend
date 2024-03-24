import {Grid, Paper, Stack, Box } from '@mui/material';
import React from 'react';
import {Facebook, Instagram, LinkedIn, GitHub} from '@mui/icons-material';

export const Footer = () =>{

    const styles = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background:'#313E50',
        padding:'2.5%'
    }
    return(
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            item sx= {styles} 
            >
                <Stack spacing ={2} direction={"row"}>
                    <Facebook/>
                    <Instagram/>
                    <LinkedIn/>
                    <GitHub/>
                </Stack>
        </Box>
    )
}