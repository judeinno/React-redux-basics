import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/" exact >Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/user">User <span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );   
}
