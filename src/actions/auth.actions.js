export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN';
export const SET_AUTH = 'SET_AUTH';
export const SET_AUTH_STATE = 'SET_AUTH_STATE';



//Pretty way of having actions for use by other files

export const setAuthToken = (authToken) =>(
    {
        type:SET_AUTH_TOKEN,
        payload:authToken
    }
)


export const setRefreshToken = (refreshToken) =>(
    {
        type:SET_REFRESH_TOKEN,
        payload:refreshToken
    }
)


export const setAuth = (auth) =>(
    {
        type:SET_AUTH,
        payload:auth
    }
)

export const setAuthState = (authState) =>(
    {
        type:SET_AUTH_STATE,
        payload:authState
    }
)