import React from "react";
import {Link} from "react-router-dom";

function Nav (){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Головна сторінка</Link>
                </li>
                <li>
                    <Link to="/contacts">Список контактів</Link>
                </li>
                <li>
                    <Link to="/add">Додати контакт</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;