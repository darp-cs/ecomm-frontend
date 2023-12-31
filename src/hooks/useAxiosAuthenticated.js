import { useEffect } from "react";
import { authenticatedInstance } from "../utils/Axios";
import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";


const useAxiosAuthenticated = () =>{

    const refresh = useRefreshToken()
    const authToken = useSelector((state)=>state.auth?.authToken)
    const auth = useSelector((state)=>state.auth)

    console.log('Sending authenticated request')
    console.log('authToken', authToken)
    useEffect(()=>{

        const requestIntercept = authenticatedInstance.interceptors.request.use(
            config=>{
                //Here we are making sure its the first attempt not a retry
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        )
        const responseIntercept = authenticatedInstance.interceptors.response.use(
            response => response,

            //If token has expired
            async (error) =>{
                const prevRequest = error?.config;
                //sent property is so we only retry once 
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    //This makes sure we will know we retried once already
                    prevRequest.sent = true
                    const newAuthToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAuthToken}`
                    //Making request again now 
                    return authenticatedInstance(prevRequest); 
                }
                return Promise.reject(error)
            }
        );

        //Clean up function to remove interceptor 
        return() =>{
            authenticatedInstance.interceptors.response.eject(responseIntercept)
            authenticatedInstance.interceptors.request.eject(requestIntercept)
        }
    },[refresh,auth])

    return authenticatedInstance
}

export default useAxiosAuthenticated;