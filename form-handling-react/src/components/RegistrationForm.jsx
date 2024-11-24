import  { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const validationErrors = {};
        if (!username) validationErrors.username = 'Username is required';
        if (!email) validationErrors.email = 'Email is required';
        if (!password) validationErrors.password = 'Password is required';

        setErrors(validationErrors);

        // If there are no errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            const formData = {
                username,
                email,
                password,
            };
            console.log('Form submitted:', formData);
            // Here you would typically send formData to the API
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;