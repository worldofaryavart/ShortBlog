// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState} from '../types/auth';
import { api, setAuthToken } from '../services/api';

interface AuthContextProps {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      loadUser();
    }
  }, []);

  const loadUser = async () => {
    try {
      const res = await api.get('/users/profile');
      setAuthState({
        isAuthenticated: true,
        user: res.data,
        token: localStorage.getItem('token'),
      });
    } catch (err) {
      console.error(err);
      setAuthState({ isAuthenticated: false, user: null, token: null });
      localStorage.removeItem('token');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post('/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setAuthToken(res.data.token);
      await loadUser();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      const res = await api.post('/users/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      setAuthToken(res.data.token);
      await loadUser();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setAuthState({ isAuthenticated: false, user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};