import { Outlet } from "react-router-dom";

const ComponentFrame = () =>{

    return(
        <main className="App">
            {/* Outlet Component will render children, equivalent to {props.children} but with more uses */}
            <Outlet/>
        </main>
    )
}

export default ComponentFrame