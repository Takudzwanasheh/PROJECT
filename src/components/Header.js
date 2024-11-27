import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>UZ INTERNISH TRACKER</h1>
            <nav>
                <button onClick={() => {/* handle home click */}}>Home</button>
                <button onClick={() => {/* handle about click */}}>About</button>
                <button onClick={() => {/* handle contact click */}}>Contact</button>
                <button onClick={() => {/* handle login click */}}>Login</button>
            </nav>
        </header>
    );
};

export default Header;