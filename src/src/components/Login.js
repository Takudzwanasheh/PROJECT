import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // State for selected role
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!username || !password || !role) {
            alert('Please fill in all fields.');
            return;
        }

        // Store user role in local storage
        localStorage.setItem('userRole', role);
        setSuccessMessage(`Login successful! Welcome, ${username}!`);

        // Redirect based on selected role
        switch (role) {
            case 'student':
                navigate('/student'); // Redirect to student page
                break;
            case 'supervisor':
                navigate('/supervisor'); // Redirect to supervisor page
                break;
            case 'employer':
                navigate('/employer'); // Redirect to employer page
                break;
            default:
                alert('Invalid role selected');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select 
                        id="role"
                        value={role} 
                        onChange={(e) => setRole(e.target.value)} 
                        required
                    >
                        <option value="" disabled>Select your role</option>
                        <option value="student">Student</option>
                        <option value="supervisor">Supervisor</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default Login;