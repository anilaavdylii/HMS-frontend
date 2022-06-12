import { useEffect } from 'react';
import { useGetMeQuery } from '../rq/hooks/useGetMeQuery';
import { useAuthStore } from '../store/auth/authStore';
import { jwtVerify } from '../utils/jwt/jwtVerify';

export const useAuthInit = () => {
  const { setIsAuthenticated, setIsLoading, isAuthenticated, user, setUser } =
    useAuthStore();

  const { isLoading } = useGetMeQuery({
    enabled: isAuthenticated && !user,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  useEffect(() => {
    const isValid = jwtVerify(localStorage.getItem('auth.token') || '');
    setIsAuthenticated(isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);
};
