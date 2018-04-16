import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand">Clicky Game</a>
                </div>
                <ul className="nav navbar-nav navbar-right"> 
                    <li>
                        <p className="navbar-text">Score: <span>{props.score}</span></p>
                    </li>
                    <li>
                        <p className="navbar-text">Top Score: <span>{props.highscore}</span></p> 
                    </li>                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
