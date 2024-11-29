import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Check credentials and set user role
        if (username === 'Pady' && password === '2022') {
            localStorage.setItem('userRole', 'student');
            setSuccessMessage('Login successful! Welcome, Pady!');
            navigate('/dashboard');
        } else if (username === 'ngaiso' && password === '2023') {
            localStorage.setItem('userRole', 'employer');
            setSuccessMessage('Login successful! Welcome, Ngaiso!');
            navigate('/dashboard');
            

        } else if (username === 'Munashe' && password === '2024') {
            localStorage.setItem('userRole', 'supervisor');
            setSuccessMessage('Login successful! Welcome, Munashe!');
            navigate('/dashboard');
        } else {
            alert('Invalid Username or Password');
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
                <select id ='role'required>
                    <option value="" disabled selected>Select your role</option>
                    <option value="student">Student</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="employer">Employer</option>
                </select>
                {/* <p>Don't have an account ? <a href="" onclick="location.href='register.js'"></a></p> */}
                <button type="submit">Login</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
        </div>
    );
};

export default Login;