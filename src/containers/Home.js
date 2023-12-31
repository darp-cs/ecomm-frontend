import React, { useState, useEffect } from 'react';
import { GeneralPaper } from '../components/GeneralPaper';
import useAxiosAuthenticated from '../hooks/useAxiosAuthenticated';
import { useLocation, useNavigate } from 'react-router-dom';


export const Home = (props) =>{

const authenticatedInstance = useAxiosAuthenticated()
const navigate = useNavigate()
const location = useLocation()
 const [users, setUsers] = useState();
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getUsers = () => {
                authenticatedInstance.get('users/getAllUsers')
                .then(response => {
                    console.log(response.data)
                }).catch( error =>{
                    console.log('Error')
                    // Optional Navigate depending on issue
                    // navigate('/login', { state: { from: location }, replace: true });
                }
                );
                // isMounted && setUsers(response.data);

                //This will save this current location in history so that when the user logs in, theyll be sent back to where they wanted to be which is this page
                // navigate('/login', { state: { from: location }, replace: true });
            }
        

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
        }, [])


        return(
        <GeneralPaper>
            <div>Home</div>
        </GeneralPaper>
        )

}




