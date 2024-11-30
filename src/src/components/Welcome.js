import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'; // Ensure your styles are imported
import myImage from './1200px-UZ_new_logo_final.jpg'


const Welcome = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <section id="welcome">
            <div className="welcome-container">
                <div className="welcome-text">
                    <h1>Welcome to the UZ Internship Tracker!</h1>
                    <p>Manage your internships, track your progress, and achieve your goals.</p>
                    <button id="get-started" onClick={handleGetStarted}>
                        Get Started
                    </button>
                </div>
                <div className="welcome-image">
                    <img src={myImage} alt="MyImage" />
                </div>
            </div>
        </section>
    );
};

export default Welcome;