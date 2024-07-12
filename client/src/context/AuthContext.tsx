// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState,User} from '../types/auth';
import { api, setAuthToken } from '../services/api';
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

interface AuthContextProps {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>,profileImage?: File) => Promise<void>;
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

  const updateProfile = async ( userData: Partial<User>, profileImage?: File) => {
    try{
      const formData = new FormData();
      Object.keys(userData).forEach(key => {
        formData.append(key, userData[key as keyof Partial<User>] as string);
      });

      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      const res = await axios.put(`${API_URL}/users/profile`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': authState.token
        }
      });

      setAuthState(prev => ({
        ...prev,
        user: { ...prev.user, ...res.data } as User
      }));
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout, updateProfile }}>
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