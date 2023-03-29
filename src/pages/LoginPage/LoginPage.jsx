import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate a successful login for demonstration purposes
        const isLoggedIn =
            email === 'test@example.com' && password === 'password';
        if (isLoggedIn) {
            navigate('/home');
        }
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
