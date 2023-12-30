import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () =>{

    const { auth } = null  //Here need to get auth from store with selector
    const location = useLocation();
    return(
        //If there is a user then user is logged in and can continue and child components will show using outlet
        auth?.user 
        ? <Outlet/>
        // If not logged in then will be routed to login page, once they login replace will then go to where they wanted to go
        //replace will replace /login with where they wanted in history so they go there after login
        :<Navigate to="/login" state={{ from: location }}  replace/>
    )



}

export default RequireAuth;