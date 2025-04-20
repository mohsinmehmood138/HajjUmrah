import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth-context';

export function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/sign-in" replace />;
} 