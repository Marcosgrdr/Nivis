import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createVP, createVN, getVPs, getVRs } from '../services/apiService';

const dendronColors = {
    VP: '#388E3C', 
    VN: '#B71C1C',
    VI: '#D78218',
    VR: '#0B5F89',
};

export function CreateDendronPage() {
    const [tipo, setTipo] = useState('VP');
    const [vps, setVps] = useState([]);
    const [vrs, setVrs] = useState([]);
    const [statusMensagem, setStatusMensagem] = useState({ type: '', message: '' });
    
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
        if (typeof getVPs === 'undefined' || typeof getVRs === 'undefined') return;

        getVPs().then(setVps).catch(err => console.error("Erro ao carregar VPs", err));
        getVRs().then(setVrs).catch(err => console.error("Erro ao carregar VRs", err));
    }, []);

    //Atualiza o estado do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    //Altera o tipo e limpa os campos específicos
    const handleSetTipo = (newTipo) => {
        setTipo(newTipo);
        setFormData(prev => ({ 
            ...prev,
            rendimento: '',
            valorInicial: '',
            vpAssociado: '',
            vrArmazenamento: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMensagem({ type: '', message: '' });

        // Validação simples
        if (!formData.titulo || !formData.descricao) {
            setStatusMensagem({ type: 'error', message: 'Título e descrição são obrigatórios.' });
            return;
        }

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
            await createDendron(dataToSend); 
            
            alert('Dendron criado com sucesso!');
            navigate('/');
        } catch (error) {
            setStatusMensagem({ type: 'error', message: 'Falha ao criar Dendron. Verifique o console.' });
            console.error("Erro completo ao criar Dendron:", error);
        }
    };
    
    const renderTabs = () => (
        <div className="dendron-opcoes">
            <div className="caixa-tipo">Tipo de Dendron: {tipo}</div>
            <div className="dendron-botoes-tipo">
                {['VP', 'VN', 'VI', 'VR'].map(t => {
                    const isActive = (tipo === t);
                    const activeClass = isActive ? `ativo-${t}` : '';
                    
                    return (
                        <button
                            key={t}
                            className={`botao-tipo-dendron ${activeClass}`}
                            onClick={() => handleSetTipo(t)}
                            style={isActive ? { backgroundColor: dendronColors[t], borderColor: dendronColors[t] } : {}}
                        >
                            {t}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    const mainBlockClass = tipo === 'VP' ? 'bloco-VP' : tipo === 'VN' ? 'bloco-VN' : '';

    return (
        <div className="dendron-form-container">
            {renderTabs()}
            
            <StatusMessage status={statusMensagem.type} message={statusMensagem.message} />

            <form onSubmit={handleSubmit}>
                <div style={styles.formBody}>
                    <div style={styles.formBlock}>
                        <h3>Dados Base</h3>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Defina um Título:</label>
                            <input style={styles.input} type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Ex: Meu Salário" />
                        </div>
                        
                        <div className="dendron-form-group">
                            <label>Descrição:</label>
                            <input 
                                className="dendron-input" 
                                type="text" 
                                name="descricao" 
                                value={formData.descricao} 
                                onChange={handleInputChange} 
                                placeholder="Ex: Onde deixarei meu salário..." 
                                required
                            />
                        </div>

                        {tipo === 'VP' && (
                            <>
                                <div className="dendron-form-group">
                                    <label>Onde armazenar os rendimentos (VR):</label>
                                    <select 
                                        className="dendron-input" 
                                        name="vrArmazenamento" 
                                        value={formData.vrArmazenamento} 
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Selecione um VR...</option>
                                        {vrs.map(vr => (
                                            <option key={vr.id} value={vr.id}>{vr.titulo}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="dendron-form-group">
                                    <label>Rendimento:</label>
                                    <input 
                                        className="dendron-input" 
                                        type="text" 
                                        name="rendimento" 
                                        value={formData.rendimento} 
                                        onChange={handleInputChange} 
                                        placeholder="Ex: 14,15%" 
                                    />
                                </div>
                                <div className="dendron-form-group">
                                    <label>Valor Inical:</label>
                                    <input 
                                        className="dendron-input" 
                                        type="text" 
                                        name="valorInicial" 
                                        value={formData.valorInicial} 
                                        onChange={handleInputChange} 
                                        placeholder="Ex: R$ 500,00" 
                                    />
                                </div>
                            </>
                        )}
                        
                        {tipo === 'VN' && (
                            <div className="dendron-form-group">
                                <label>Associar a um Dendron (VP):</label>
                                <select 
                                    className="dendron-input" 
                                    name="vpAssociado" 
                                    value={formData.vpAssociado} 
                                    onChange={handleInputChange}
                                    required
                                >
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
                    <div className="dendron-form-block" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <h3>Automatização</h3>
                        
                        <div className="dendron-form-group dendron-radio-group">
                            <label>Automatizar valor de forma recorrente?</label>
                            <div className="opcoes-radio">
                                <label>
                                    <input type="radio" name="auto_recorrente" value="sim" /> Sim
                                </label>
                                <label>
                                    <input type="radio" name="auto_recorrente" value="nao" defaultChecked/> Não
                                </label>
                            </div>
                        </div>
                        
                        <div className="dendron-form-group">
                            <label>Defina o valor:</label>
                            <input className="dendron-input" type="text" name="auto_valor" placeholder="Ex: R$ 1.900,00" />
                        </div>
                        <div className="dendron-form-group">
                            <label>Observação:</label>
                            <input className="dendron-input" type="text" name="auto_obs" placeholder="Ex: Pagamento" />
                        </div>
                        <div className="dendron-form-group">
                            <label>Intervalo:</label>
                            <input className="dendron-input" type="text" name="auto_intervalo" placeholder="Ex: Todo dia 05" />
                        </div>
                    </div>
                </div>
                
                <button className="botao-confirmar-final" type="submit">Confirmar Criação de Dendron</button>
            </form>
        </div>
    );
}