import React from 'react';
import '../styles/NavBar.scss'
const NavBar = () => {
    return (
        <nav className={'navBar'}>
            <div className="icon">
                <img/>
            </div>
            <div className={'search-patient'}>
                <input type={"text"}/>
            </div>
            <div className="add">
                <button>+</button>
            </div>
        </nav>
    );
};

export default NavBar;
