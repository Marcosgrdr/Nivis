import React, { useState } from 'react';
import './DendronCard.css';

const dendronColors = {
    VP: '#308A6D',
    VN: '#BA4E4E',
    VI: '#D78218',
    VR: '#0B5F89',
    default: '#888'
};

export function DendronCard({ dendron }) {
    
    const [isExpanded, setIsExpanded] = useState(false);

    const insigniaColor = dendronColors[dendron.tipo] || dendronColors.default;

    const valorClass = 
        dendron.tipo === 'VP' || dendron.tipo === 'VI' || dendron.tipo === 'VR'
        ? 'valor-positivo' // Verde
        : 'valor-negativo'; // Vermelho

    return (
        <div className="dendron-card">
            <div 
                className="dendron-card-header" 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="dendron-header-title-group">
                    <div 
                        className={`dendron-insignia dendron-type-${dendron.tipo}`}
                        style={{ backgroundColor: insigniaColor }}
                    >
                        {dendron.tipo}
                    </div>
                    <span className="dendron-title">{dendron.titulo}</span>
                </div>

                <span className={`dendron-valor ${valorClass}`}>
                    {dendron.valor}
                </span>
            </div>
            
            {isExpanded && (
                <div className="dendron-card-body">
                    <p className="dendron-descricao">{dendron.descricao}</p>
                    
                    {dendron.tipo === 'VP' && dendron.transacoes && dendron.transacoes.length > 0 && (
                        <div className="dendron-transacoes">
                            <div className="transacao-header">
                                <span>Valor</span>
                                <span>Observação</span>
                                <span>Movimento</span>
                                <span>Data</span>
                            </div>
                            {dendron.transacoes.map(t => (
                                <div key={t.id} className="transacao-row">
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