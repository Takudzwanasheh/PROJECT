import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>UZ INTERNSHIP TRACKER</h1>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="./About"><button>About</button></Link>
                <Link to="/"><button>SignOut</button></Link>
            </nav>
        </header>
    );
};

export default Header;