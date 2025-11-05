import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDashboardData } from '../services/apiService';
import { DendronCard } from '../components/DendronCard';

const styles = {
    container: {
        maxWidth: '900px',
        margin: 'auto'
    },
    resumoHeader: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '30px'
    },
    resumoItem: {
        color: 'white',
        fontSize: '1.2em'
    },
    emptyState: {
        textAlign: 'center',
        color: 'white',
        padding: '50px'
    },
    ctaButton: {
        backgroundColor: '#28a745',
        color: 'white',
        padding: '12px 20px',
        fontSize: '1.1em',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
    }
};

export function DashboardPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getDashboardData()
        .then(response => {
            setData(response);
            setLoading(false);
        })
        .catch(err => {
            console.error("Falha ao buscar dados do dashboard:", err);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!data || data.dendrons.length === 0) {
        return (
        <div style={styles.emptyState}>
            <h2>Ops... Parece que você ainda não tem registros.</h2>
            <p>Crie agora um Novo Dendron para atualizar sua Página Inicial!</p>
            <button 
            style={styles.ctaButton}
            onClick={() => navigate('/dendron/novo')}
            >
            Criar Novo Dendron
            </button>
        </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.resumoHeader}>
                <div style={styles.resumoItem}>
                Valor Total: <strong>{data.resumo.valorTotal}</strong>
                </div>
                <div style={styles.resumoItem}>
                Dívidas Previstas: <strong>{data.resumo.dividasPrevistas}</strong>
                </div>
            </div>
            
            <div>
                {data.dendrons.map(d => (
                <DendronCard key={d.id} dendron={d} />
                ))}
            </div>
            
            <div style={{ textAlign: 'center' }}>
                <button 
                style={styles.ctaButton}
                onClick={() => navigate('/dendron/novo')}
                >
                Criar Novo Dendron
                </button>
            </div>
        </div>
    );
}