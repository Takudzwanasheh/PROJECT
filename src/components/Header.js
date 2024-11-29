import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>UZ INTERNSHIP TRACKER</h1>
            <nav>
                <button onClick={() => {"dashboard"}}>Home</button>
                <button onClick={() => {/* handle about click */}}>About</button>
                <button onClick={() => {/* handle contact click */}}>Contact</button>
                <button onClick={() => {"dashboard"}}>SignOut</button>
            </nav>
        </header>
    );
};

export default Header;