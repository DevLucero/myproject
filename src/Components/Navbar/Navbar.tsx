// this must to start with SUPERCASE because it's a class

import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="ownname">
                <strong>Lucero</strong>
            </div>
            <div className="buttons">
                <button className="btn" title="Show..">Display1</button>
                <button className="btn" title="Show..">Display1</button>
                <button className="btn" title="Show..">Display1</button>
            </div>
        </div>
        </>
    );
}

export default Navbar;