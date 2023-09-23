import React from 'react';
import { GeneralPaper } from '../components/GeneralPaper';
import Dashboard from '../components/dashboard/Dashboard'


export const Home = (props) =>{
    return(
        <GeneralPaper>
            <Dashboard />
        </GeneralPaper>
    )
}


