import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Products } from "./Products";

export const Main = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    )
        
}
