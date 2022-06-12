import create from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
  setIsAuthenticated: (isAuthenticated) => set(() => ({ isAuthenticated })),
  setUser: (user) => set(() => ({ user })),
}));
