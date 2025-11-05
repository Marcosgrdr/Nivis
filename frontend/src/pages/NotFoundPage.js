import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <div style={{ textAlign: 'center', color: 'white', marginTop: '50px' }}>
            <h1>Erro 404</h1>
            <p>Ops... A página que você está procurando não foi encontrada.</p>
            <Link to="/">Voltar para a Página Inicial</Link>
        </div>
    );
}