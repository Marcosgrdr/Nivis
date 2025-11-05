import React, { useState, useEffect } from 'react';
import { getPerfil, updatePerfil } from '../services/apiService';

const styles = {
    formContainer: {
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#004a8d',
        padding: '30px',
        borderRadius: '8px',
        color: 'white'
    },
    formGroup: {
        marginBottom: '20px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '0.9em'
    },
    input: {
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#ffffff',
        color: '#333',
        fontSize: '1em'
    },
    disabledInput: {
        backgroundColor: '#eee',
        color: '#777'
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.1em',
        width: '100%'
    }
};

export function ProfilePage() {
    const [perfil, setPerfil] = useState({
        nomeCompleto: '',
        idade: '',
        email: '',
        assinatura: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPerfil().then(data => {
        setPerfil(data);
        setLoading(false);
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerfil(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await updatePerfil(perfil);
        alert('Perfil atualizado!');
        } catch (error) {
        alert('Falha ao atualizar perfil.');
        }
    };

    if (loading) return <div>Carregando perfil...</div>;

    return (
        <div style={styles.formContainer}>
            <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Nome completo:</label>
                    <input 
                        style={styles.input} 
                        type="text" 
                        name="nomeCompleto" 
                        value={perfil.nomeCompleto} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email:</label>
                    <input 
                        style={styles.input} 
                        type="email" 
                        name="email" 
                        value={perfil.email} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Idade:</label>
                    <input 
                        style={{...styles.input, ...styles.disabledInput}} 
                        type="text" 
                        name="idade" 
                        value={perfil.idade} 
                        disabled 
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Assinatura:</label>
                    <input 
                        style={{...styles.input, ...styles.disabledInput}} 
                        type="text" 
                        name="assinatura" 
                        value={perfil.assinatura} 
                        disabled 
                    />
                </div>
                
                <br/>
                <button style={styles.button} type="submit">Confirmar</button>
            </form>
        </div>
    );
}