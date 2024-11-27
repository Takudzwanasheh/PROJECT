import React from 'react';
import { useNavigate } from 'react-router-dom'; // Update this import

const RoleSelection = () => {
    const navigate = useNavigate(); // Update this

    const handleRoleSelection = (role) => {
        switch (role) {
            case 'student':
                navigate('/student'); // Update this
                break;
            case 'supervisor':
                navigate('/supervisor'); // Update this
                break;
            case 'employer':
                navigate('/employer'); // Update this
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h2>Select Your Role</h2>
            <button onClick={() => handleRoleSelection('student')}>Student</button>
            <button onClick={() => handleRoleSelection('supervisor')}>Supervisor</button>
            <button onClick={() => handleRoleSelection('employer')}>Employer</button>
        </div>
    );
};

export default RoleSelection;