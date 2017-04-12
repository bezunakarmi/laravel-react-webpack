import React from "react";
import { NavLink } from "react-router-dom";

const Links = (props) => (


<nav className="navbar">

    <ul id="nav">

        <li>
           <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>

    </ul>

</nav>

);


export default Links;