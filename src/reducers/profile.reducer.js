import * as actions from '../actions/profile.actions'

const initialState = {
    profile : {}

}


export const loginReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case actions.SET_USER_PROFILE:
            return{
                ...state,
                datatoset:payload.data
            }
    }
}