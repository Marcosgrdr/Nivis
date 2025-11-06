import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './AuthPage.css';

function LoginForm() {
    const { login } = useAuth();
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, senha);
            
            navigate('/dashboard'); 
            
        } catch (error) {
            alert("Falha no login. Verifique os dados.");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="input-campo"
                type="email" 
                placeholder="Seu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                className="input-campo"
                type="password" 
                placeholder="Senha" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)} 
            />
            <div className="container-senha">
                <p className="aviso-senha" style={{display: 'none'}}>Mínimo de 8 caracteres.</p>
            </div>
            <button className="botao-enviar" type="submit">ENTRAR</button>
            <a href="#" className="link-esqueceu-senha">Esqueceu sua senha?</a>
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
        <form onSubmit={handleSubmit} className="form-cadastro-ativo">
            <input 
                className="input-campo"
                type="text" 
                placeholder="Nome" 
                value={nome}
                onChange={(e) => setNome(e.target.value)} 
            />
            <input 
                className="input-campo"
                type="email" 
                placeholder="Seu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <div className="container-senha">
                <input 
                    className="input-campo"
                    type="password" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)} 
                />
            </div>
            <button className="botao-enviar" type="submit">CADASTRAR</button>
        </form>
    );
}

export function AuthPage() {
    const [modo, setModo] = useState('ENTRAR');

    return (
        <> 
        <img 
            src="/assets/images/snowflake 2.png"
            alt="Ícone de Floco de Neve" 
            className="floco-neve-img icone-global" 
        />
        <div className="container"> 
            
            <div className="painel-esquerda">
                <div className="cabecalho">
                    <h1 className="logotipo">Nivis</h1> 
                </div>
                <div className="informacao">
                    <h2>Vamos juntos organizar<br/> suas finanças</h2>
                    <div className="imagem-moeda">
                        <img 
                            src="/assets/images/money 1.png"
                            alt="moeda-ilustração"
                        />
                    </div>
                </div>
            </div>

            <div className="painel-direita">
                <div className="container-formulario">
                    <div className="abas"> 
                        <button 
                            onClick={() => setModo('ENTRAR')}
                            className={`aba-entrar ${modo === 'ENTRAR' ? 'ativo' : ''}`} 
                        >
                            ENTRAR
                        </button>
                        <button 
                            onClick={() => setModo('CADASTRAR')}
                            className={`aba-cadastrar ${modo === 'CADASTRAR' ? 'ativo' : ''}`}
                        >
                            CADASTRAR
                        </button>
                    </div>
                    
                    {modo === 'ENTRAR' && <LoginForm />}
                    {modo === 'CADASTRAR' && <RegisterForm />}
                </div>
            </div>
        </div>
        </>
    );
}