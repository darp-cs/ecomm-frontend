import * as actions from '../actions/profile.actions'

const initialState = {
    authToken: null,
    refreshToken: null,
    auth:false

}


const authReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case actions.SET_AUTH_TOKEN:
            return{
                ...state,
                authToken:payload
            }
        case actions.SET_REFRESH_TOKEN:
            return{
                ...state,
                refreshToken:payload
            }
        case actions.SET_AUTH:
            return{
                ...state,
                auth:payload
            }
        case actions.SET_AUTH_STATE:
            return payload
            
    }
}