import React from "react";
import { logo } from "../logo.svg";
import { styles } from "./Header.module.scss";

function Header() {
    return (
        <nav className="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle">
                <i className="fas fa-bars" />
            </span>
            <a href="#" className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <ul className="main-nav" id="js-menu">
                <li>
                    <a href="#" className="nav-links">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links">
                        People
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links">
                        Events
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
