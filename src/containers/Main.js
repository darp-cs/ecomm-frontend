import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
// import { Products } from "./Products";
import RequireAuth from "../components/RequireAuth";
import ComponentFrame from "../components/ComponentFrame";

export const Main = () =>{

    return (
        <BrowserRouter>
            <Routes>

            
                {/* Parent Route is / everything inside will be /<route> */}
                <Route path="/" element={<ComponentFrame/>}>


                    {/* Public Routes */}
                    <Route path="login" element={<Login/>}/>



                    {/* Protected Routes */}
                    {/* Require Auth will check if logged in, if not will redirect to login */}
                    <Route element ={<RequireAuth/>}>
                        {/* <Route path="products" element={<Products/>}/> */}
                        <Route path="home" element={<Home />}/>
                    </Route>

                </Route>
                {/* Catch All */}
                {/* <Route path = "*"/> */}
            </Routes>
        </BrowserRouter>
    )
        
}
