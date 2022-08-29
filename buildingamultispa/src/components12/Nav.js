import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div>
                <a href="#">Logo</a>
                <ul>
                    {/* <Link to="/">Home</Link> */}
                    {/* <a href="/">Home</a> */}
                    <NavLink activeClassName="selected" exact to="/">Home</NavLink>
                    <NavLink activeClassName="selected" to="/about">About</NavLink>
                    <NavLink activeClassName="selected" to="/blog">blog</NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
