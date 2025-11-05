import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (email, password) => {
    console.log("Tentando login com:", email, password);
    const mockUserData = {
        id: 1,
        nome: "Usuário de Teste",
        email: email,
        token: "fake-jwt-token-12345"
    };

    setUser(mockUserData);
    navigate('/');
    };

    const register = async (nome, email, password) => {
    console.log("Registrando:", nome, email, password);
    await login(email, password);
    };

    const logout = () => {
    setUser(null);
    navigate('/auth');
    };

    const value = {
    isAuthenticated: !!user,
    user,
    login,
    register,
    logout,
    };

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}