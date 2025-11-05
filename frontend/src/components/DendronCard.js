import React, { useState } from 'react';

const dendronColors = {
    VP: '#308A6D',
    VN: '#BA4E4E',
    VI: '#D78218',
    VR: '#0B5F89',
    default: '#888'
};

const styles = {
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        marginBottom: '16px',
        color: 'white',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        cursor: 'pointer'
    },
    headerTitleGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    },
    insignia: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: '0.9em'
    },
    title: {
        fontSize: '1.2em',
        fontWeight: 'bold'
    },
    valor: {
        fontSize: '1.2em',
        fontWeight: 'bold',
    },
    body: {
        padding: '0 16px 16px 16px',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)'
    },
    descricao: {
        fontSize: '0.9em',
        marginBottom: '16px',
        marginTop: '10px'
    },
    transacaoHeader: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        fontWeight: 'bold',
        fontSize: '0.8em',
        borderBottom: '1px solid white',
        paddingBottom: '5px'
    },
    transacaoRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        fontSize: '0.9em',
        padding: '5px 0'
    }
};

export function DendronCard({ dendron }) {
    
    const [isExpanded, setIsExpanded] = useState(false);

    const color = dendronColors[dendron.tipo] || dendronColors.default;

    return (
        <div style={styles.card}>
            <div 
                style={styles.header} 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div style={styles.headerTitleGroup}>
                    <div style={{...styles.insignia, backgroundColor: color}}>
                        {dendron.tipo}
                    </div>
                    <span style={styles.title}>{dendron.titulo}</span>
                </div>

                <span style={{
                    ...styles.valor, 
                    color: dendron.tipo === 'VP' || dendron.tipo === 'VI' || dendron.tipo === 'VR' 
                        ? '#4CAF50'
                        : '#F44336'
                }}>
                    {dendron.valor}
                </span>
            </div>
            
            {isExpanded && (
                <div style={styles.body}>
                    <p style={styles.descricao}>{dendron.descricao}</p>
                    
                    {dendron.tipo === 'VP' && dendron.transacoes.length > 0 && (
                        <div>
                            <div style={styles.transacaoHeader}>
                                <span>Valor</span>
                                <span>Observação</span>
                                <span>Movimento</span>
                                <span>Data</span>
                            </div>
                            {dendron.transacoes.map(t => (
                                <div key={t.id} style={styles.transacaoRow}>
                                    <span>{t.valor}</span>
                                    <span>{t.obs}</span>
                                    <span>{t.mov}</span>
                                    <span>{t.data}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}