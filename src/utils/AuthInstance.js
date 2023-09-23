import axios from 'axios';
import { useSelector } from 'react-redux';
import { authToken } from '../reducers/auth.reducer';



const baseURL = 'http://localhost:8080/'
export const AuthInstance = axios.create({
    baseURL : baseURL,
    timeout:1000,
    //default headers for now, later will change this
    }
)