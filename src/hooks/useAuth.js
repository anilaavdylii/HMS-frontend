import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthStore } from '../store/auth/authStore';
import { useGetMeQuery } from '../rq/hooks/useGetMeQuery';

export const useLogin = (token, role) => {
  const { push } = useHistory();
  const { setUser, setIsAuthenticated } = useAuthStore();

  const { refetch } = useGetMeQuery({
    enabled: false,
    onSuccess: (data) => {
      setUser(data);
      setIsAuthenticated(true);
      localStorage.setItem('auth.token', token);
      push(role === 'admin' ? '/admin' : 'user');
    },
  });
  const login = useCallback(() => refetch(), [refetch]);

  const logout = useCallback(() => {
    console.log('got here');
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth.token');
    push('/');
  }, [push, setIsAuthenticated, setUser]);

  return { login, logout };
};
