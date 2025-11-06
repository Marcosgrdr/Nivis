import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDendron, getVPs, getVRs } from '../services/apiService'; 
import './CreateDendronPage.css';

function StatusMessage({ status, message }) {
    if (!message) return null;
    
    const baseClass = "status-mensagem";
    const statusClass = status === 'success' ? 'status-success' : 'status-error';

    return (
        <div className={`${baseClass} ${statusClass}`}>
            {message}
        </div>
    );
}

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
        titulo: '',
        descricao: '',
        rendimento: '',
        valorInicial: '',
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
            const dataToSend = {
                tipo,
                titulo: formData.titulo,
                descricao: formData.descricao,
            };

            if (tipo === 'VP') {
                dataToSend.rendimento = formData.rendimento;
                dataToSend.valorInicial = formData.valorInicial;
                dataToSend.vrArmazenamento = formData.vrArmazenamento;
            } else if (tipo === 'VN') {
                dataToSend.vpAssociado = formData.vpAssociado;
            }
            await createDendron(dataToSend); 
            
            setStatusMensagem({ type: 'success', message: 'Dendron criado com sucesso!' });
            
            setTimeout(() => {
                navigate('/');
            }, 2000);

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
                <div className="dendron-form-body">
                    
                    <div className={`dendron-form-block ${mainBlockClass}`}>
                        <h3>Dados Base e do Tipo ({tipo})</h3>
                        
                        <div className="dendron-form-group">
                            <label>Defina um Título:</label>
                            <input 
                                className="dendron-input" 
                                type="text" 
                                name="titulo" 
                                value={formData.titulo} 
                                onChange={handleInputChange} 
                                placeholder="Ex: Meu Salário" 
                                required
                            />
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