import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const userRole = localStorage.getItem('userRole');

    const handleRoleSelection = (role) => {
        if (role === 'student') {
            navigate('/student');
        } else if (role === 'supervisor') {
            navigate('/supervisor');
        } else if (role === 'employer') {
            navigate('/employer');
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome to the UZ Internship Tracker</h1>
            <h2>Select Your Role</h2>
            {userRole === 'student' && (
                <button onClick={() => handleRoleSelection('student')}>Student Portal</button>
            )}
            {userRole === 'supervisor' && (
                <button onClick={() => handleRoleSelection('supervisor')}>Supervisor Portal</button>
            )}
            {userRole === 'employer' && (
                <button onClick={() => handleRoleSelection('employer')}>Employer Portal</button>
            )}
            {/* Optionally show a message for unauthorized access */}
            {userRole === null && <p>Please log in to access your portal.</p>}
        </div>
    );
};

export default Dashboard;