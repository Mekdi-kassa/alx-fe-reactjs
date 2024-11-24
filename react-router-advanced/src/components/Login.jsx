// src/components/Login.jsx
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication process
    localStorage.setItem('user', 'authenticated');
    navigate('/profile'); // Redirect to profile after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;