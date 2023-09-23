import { DefaultInstance } from "../utils/DefaultInstance";
import { setAuthToken } from "../reducers/auth.reducer";
import { useDispatch } from "react-redux";
export const SET_USER_CREDENTIAL = 'SET_USER_CREDENTIAL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const SET_PERMISSIONS = 'SET_PERMISSIONS'


// export const AuthActions = () =>{

//     const dispatch = useDispatch()


//     const sendLogin = (credential,password)=>{
//         DefaultInstance.post('auth/login', {"credential":credential,
//         "password":password})
//         .then(response=>{
//             dispatch(setAuthToken(response.data.authToken))
//         })
        
//     }
// }




// export const setAuthToken = (authToken) =>(
//     {
//         type:SET_AUTH_TOKEN,
//         payload:authToken
//     }
// )
