import axios from 'axios';


const baseURL = 'http://localhost:8080/'


export const defaultInstance = axios.create({
    baseURL : baseURL,
    // timeout:1000,
    //default headers for now, later will change this
    // headers:
})

export const authenticatedInstance = axios.create({
    baseURL: baseURL,
    headers: {"Content-Type":'application/json'},
    withCredentials:true
})