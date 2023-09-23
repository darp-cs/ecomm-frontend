import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

//Cancel any default actions triggered by the event 
function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits(){
    return (
        <React.Fragment>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">
                $3025.56 //dummy data/values. replace this with dynamic data
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                On March 2015
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}