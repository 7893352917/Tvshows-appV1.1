import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <nav className="navbar__nav">
                    <h3 className="nav__name" >
                        <Link to="/"><strong> TV SHOW SEARCH </strong> </Link>
                    </h3>
                    <ul className="nav__links">
                        <li> <NavLink to="/" exact> <strong>HOME</strong> </NavLink> </li>
                        <li> <NavLink exact to="/about"> <strong>ABOUT </strong> </NavLink> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;