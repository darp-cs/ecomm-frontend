import { defaultInstance } from '../utils/Axios';

const useRefreshToken = () => {

    
    const refresh = async () => {
        console.log('trying to refresh token')
        const response = await defaultInstance.get('auth/refresh', {
            withCredentials: true
        });
        //change this into redux and add to slice 
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return { ...prev, accessToken: response.data.accessToken }
        // });
        // return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;