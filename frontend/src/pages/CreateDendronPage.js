import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createVP, createVN, getVPs, getVRs } from '../services/apiService';

const dendronColors = {
    VP: '#308A6D',
    VN: '#BA4E4E',
    VI: '#D78218',
    VR: '#0B5F89',
    default: '#f4f4f4'
};

const styles = {
    formContainer: {
        maxWidth: '800px',
        margin: 'auto',
        backgroundColor: '#004a8d',
        padding: '20px',
        borderRadius: '8px',
        color: 'white'
    },
    tabs: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
    },
    tab: {
        padding: '10px 15px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#f4f4f4',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '0.9em'
    },
    formBody: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
    },
    formBlock: {
        flex: 1,
        minWidth: '300px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '15px',
        borderRadius: '8px'
    },
    formGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#ffffff',
        color: '#333'
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.1em',
        width: '100%',
        marginTop: '20px'
    }
};

export function CreateDendronPage() {
    const [tipo, setTipo] = useState('VP');
    const [vps, setVps] = useState([]);
    const [vrs, setVrs] = useState([]);
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        rendimento: '',
        valorTotal: '',
        vpAssociado: '', 
        vrArmazenamento: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        getVPs().then(setVps);
        getVRs().then(setVrs);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (tipo === 'VP') {
                const vpData = {
                    nome: formData.nome,
                    descricao: formData.descricao,
                    rendimento: parseFloat(formData.rendimento),
                    valorTotal: parseFloat(formData.valorTotal)
                };
                await createVP(vpData);

            } else if (tipo === 'VN') {
                const vnData = {
                    nome: formData.nome,
                    descricao: formData.descricao
                };
                await createVN(vnData);
            }
            
            alert('Dendron criado com sucesso!');
            navigate('/');
        } catch (error) {
            alert('Falha ao criar Dendron.');
            console.error(error);
        }
    };
    
    const renderTabs = () => (
        <div style={styles.tabs}>
            {['VP', 'VN', 'VI', 'VR'].map(t => {
                
                const isActive = (tipo === t);
                const tabStyle = {
                    ...styles.tab,
                    backgroundColor: isActive 
                        ? dendronColors[t]
                        : dendronColors.default,
                    color: isActive 
                        ? '#FFFFFF'
                        : '#333'
                };

                return (
                    <div 
                        key={t}
                        style={tabStyle}
                        onClick={() => setTipo(t)}
                    >
                        {t}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div style={styles.formContainer}>
            {renderTabs()}
            <form onSubmit={handleSubmit}>
                <div style={styles.formBody}>
                    <div style={styles.formBlock}>
                        <h3>Dados Base</h3>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Defina um Título:</label>
                            <input style={styles.input} type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Ex: Meu Salário" />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Descrição:</label>
                            <input style={styles.input} type="text" name="descricao" value={formData.descricao} onChange={handleInputChange} placeholder="Ex: Onde deixarei meu salário..." />
                        </div>

                        {tipo === 'VP' && (
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Onde armazenar os rendimentos (VR):</label>
                                <select style={styles.input} name="vrArmazenamento" value={formData.vrArmazenamento} onChange={handleInputChange}>
                                    <option value="">Selecione um VR...</option>
                                    {vrs.map(vr => (
                                        <option key={vr.id} value={vr.id}>{vr.titulo}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {tipo === 'VN' && (
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Associar a um Dendron (VP):</label>
                                <select style={styles.input} name="vpAssociado" value={formData.vpAssociado} onChange={handleInputChange}>
                                    <option value="">Selecione um VP...</option>
                                    {vps.map(vp => (
                                        <option key={vp.id} value={vp.id}>{vp.titulo}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {tipo === 'VP' && (
                            <>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Rendimento (%):</label>
                                    <input style={styles.input} type="number" name="rendimento" value={formData.rendimento} onChange={handleInputChange} placeholder="Ex: 14.15" />
                                </div>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Valor Inicial:</label>
                                    <input style={styles.input} type="number" name="valorTotal" value={formData.valorTotal} onChange={handleInputChange} placeholder="Ex: 500.00" />
                                </div>
                            </>
                        )}
                    </div>

                    <div style={styles.formBlock}>
                        <h3>Automatização</h3>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Automatizar valor de forma recorrente?</label>
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Defina o valor:</label>
                            <input style={styles.input} type="text" name="auto_valor" placeholder="Ex: R$ 1.900,00" />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Observação:</label>
                            <input style={styles.input} type="text" name="auto_obs" placeholder="Ex: Pagamento" />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Intervalo:</label>
                            <input style={styles.input} type="text" name="auto_intervalo" placeholder="Ex: Todo dia 05" />
                        </div>
                    </div>
                </div>
                
                <button style={styles.button} type="submit">Confirmar</button>
            </form>
        </div>
    );
}