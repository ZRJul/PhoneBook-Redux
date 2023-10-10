import Nav from "./Nav.jsx";
import {Outlet} from "react-router-dom";


function Root(){
    return(
        <div>
            <Nav/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Root;