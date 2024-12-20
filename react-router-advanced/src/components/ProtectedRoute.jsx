// src/components/ProtectedRoute.jsx

import { Navigate } from 'react-router-dom';
import useAuth from './useAuth'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;