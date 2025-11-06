import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './MainLayout.css'; // Importa seu CSS

export function MainLayout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/auth'); 
    };
    
    const userAvatar = user?.nome ? user.nome.substring(0, 2).toUpperCase() : 'US';

    return (
        <div className="painel-principal"> 
            
            <header className="navbar-dashboard">
                <div className="menu-esquerda">
                    <span className="icone-menu">☰</span> 
                    
                    <Link to="/perfil" className="perfil-link">
                        <span className="usuario-info">
                            <span className="usuario-avatar">{userAvatar}</span> 
                            Bem-vindo, {user?.nome || 'Usuário de Teste'}
                        </span>
                    </Link>
                    
                    <span className="localizacao">
                        Você está em: <strong>PÁGINA INICIAL</strong>
                    </span>
                </div>
                
                <div className="menu-direita">
                    <Link to="/dashboard" className="logotipo-link">
                        <h1 className="logotipo-dashboard">Nivis</h1>
                    </Link>
                    <button onClick={handleLogout} className="botao-sair">
                        Sair
                    </button>
                </div>
            </header>
            
            <main className="conteudo-principal-layout">
                {children}
            </main>
        </div>
    );
}