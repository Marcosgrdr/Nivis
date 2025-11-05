import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const styles = {
    header: {
        backgroundColor: '#004d99',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white'
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    logoutButton: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export function MainLayout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };

    return (
        <div>
            <header style={styles.header}>
                <Link to="/" style={styles.logo}>Nivis</Link>
                <nav style={styles.nav}>
                <span>Bem-vindo, {user?.nome || 'Usuário'}</span>
                <Link to="/perfil" style={styles.link}>Perfil</Link>
                <button onClick={handleLogout} style={styles.logoutButton}>
                    Sair
                </button>
                </nav>
            </header>
            <main style={{ padding: '20px' }}>
                {children}
            </main>
        </div>
    );
}