import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: '10vh auto',
        textAlign: 'center'
    },
    tabs: {
        marginBottom: '30px'
    },
    tabButton: {
        background: 'none',
        border: 'none',
        color: '#ccc',
        fontSize: '1.2em',
        padding: '10px 15px',
        cursor: 'pointer'
    },
    activeTab: {
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '2px solid #28a745'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid #555',
        borderRadius: '4px',
        padding: '12px',
        color: 'white',
        fontSize: '1em'
    },
    button: {
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '4px',
        padding: '12px',
        color: 'white',
        fontSize: '1.1em',
        fontWeight: 'bold'
    }
};

function LoginForm() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !senha) {
            alert("Preencha email e senha");
            return;
        }
        try {
            await login(email, senha);
        } catch (error) {
            alert("Falha no login. Verifique os dados.");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
        <input 
            style={styles.input}
            type="email" 
            placeholder="Seu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
            style={styles.input}
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
        />
        <button style={styles.button} type="submit">ENTRAR</button>
        </form>
    );
}

function RegisterForm() {
    const { register } = useAuth();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nome || !email || !senha) {
            alert("Preencha todos os campos");
            return;
        }
        try {
            await register(nome, email, senha);
        } catch (error) {
            alert("Falha no cadastro.");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
        <input 
            style={styles.input}
            type="text" 
            placeholder="Nome" 
            value={nome}
            onChange={(e) => setNome(e.target.value)} 
        />
        <input 
            style={styles.input}
            type="email" 
            placeholder="Seu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
            style={styles.input}
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
        />
        <button style={styles.button} type="submit">CADASTRAR</button>
        </form>
    );
}

export function AuthPage() {
    const [modo, setModo] = useState('ENTRAR');

    return (
        <div style={styles.container}>
            <div style={styles.tabs}>
                <button 
                onClick={() => setModo('ENTRAR')}
                style={{
                    ...styles.tabButton, 
                    ...(modo === 'ENTRAR' && styles.activeTab)
                }}
                >
                ENTRAR
                </button>
                <button 
                onClick={() => setModo('CADASTRAR')}
                style={{
                    ...styles.tabButton, 
                    ...(modo === 'CADASTRAR' && styles.activeTab)
                }}
                >
                CADASTRAR
                </button>
            </div>

            <div style={{ marginTop: '20px' }}>
                {modo === 'ENTRAR' && <LoginForm />}
                {modo === 'CADASTRAR' && <RegisterForm />}
            </div>
        </div>
    );
}