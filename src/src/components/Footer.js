import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 UZ INTERNSHIP TRACKER. All rights reserved.</p>
            <button onClick={() => {/* handle privacy policy action */}}>Privacy Policy</button> | 
            <button onClick={() => {/* handle terms of service action */}}>Terms of Service</button>
        </footer>
    );
};

export default Footer;