import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { registerPF, registerPJ } from '../services/apiService';

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
    },
    formGroup: {
        textAlign: 'left',
        padding: '10px 0',
        color: 'white'
    }
};

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
    const [tipoUsuario, setTipoUsuario] = useState('PF'); 
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const [razaoSocial, setRazaoSocial] = useState('');
    const [dataAbertura, setDataAbertura] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if (tipoUsuario === 'PF') {
                const pfData = {
                    nome,
                    dataNascimento,
                    email,
                    senha
                };
                await registerPF(pfData);
                
            } else if (tipoUsuario === 'PJ') {
                const pjData = {
                    razaoSocial,
                    dataAbertura,
                    email,
                    senha
                };
                await registerPJ(pjData);
            }
            
            alert('Usuário registrado com sucesso! Por favor, faça o login.');
            
        } catch (error) {
            alert('Erro ao registrar. Verifique os dados.');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label>Tipo de Conta:</label>
                <div>
                    <input type="radio" value="PF" name="tipoUsuario" id="tipoPF" checked={tipoUsuario === 'PF'} onChange={() => setTipoUsuario('PF')} />
                    <label htmlFor="tipoPF" style={{marginRight: '15px', color: 'white'}}>Pessoa Física</label>
                    
                    <input type="radio" value="PJ" name="tipoUsuario" id="tipoPJ" checked={tipoUsuario === 'PJ'} onChange={() => setTipoUsuario('PJ')} />
                    <label htmlFor="tipoPJ" style={{color: 'white'}}>Pessoa Jurídica</label>
                </div>
            </div>

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

            {tipoUsuario === 'PF' ? (
                <>
                    <input 
                        style={styles.input}
                        type="text" 
                        placeholder="Nome Completo" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                    />
                    <input 
                        style={styles.input}
                        type="text"
                        placeholder="Data de Nascimento (YYYY-MM-DD)" 
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)} 
                    />
                </>
            ) : (
                <>
                    <input 
                        style={styles.input}
                        type="text" 
                        placeholder="Razão Social" 
                        value={razaoSocial}
                        onChange={(e) => setRazaoSocial(e.target.value)} 
                    />
                    <input 
                        style={styles.input}
                        type="text"
                        placeholder="Data de Abertura (YYYY-MM-DD)" 
                        value={dataAbertura}
                        onChange={(e) => setDataAbertura(e.target.value)} 
                    />
                </>
            )}

            <button style={styles.button} type="submit">CADASTRAR</button>
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