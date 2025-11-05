const mockData = {
    resumo: {
        valorTotal: "R$ 1.332,00",
        dividasPrevistas: "R$ 1.340,00 / Abril"
    },
    dendrons: [
        {
        id: 1,
        tipo: "VP",
        titulo: "Meu Salário",
        descricao: "Onde deixarei meu salário separado para outras rendas",
        valor: "R$ 802,00",
        transacoes: [
            { id: 10, valor: "+ R$1.900,00", obs: "Pagamento", tipo: "VP", mov: "Recorrente", data: "05/04" },
            { id: 11, valor: "- R$1.190,00", obs: "Faculdade", tipo: "VN", mov: "Recorrente", data: "05/04" }
        ]
        },
        {
        id: 2,
        tipo: "VN",
        titulo: "Gastos Mensais",
        descricao: "Meus gastos mensais fixos a serem cobrados no Meu Salário",
        valor: "- R$1.340,00",
        transacoes: []
        },
        {
        id: 3,
        tipo: "VN",
        titulo: "Gastos Anuais",
        descricao: "Meus gastos anuais fixos a serem cobrados no Meu Salário",
        valor: "- R$0",
        transacoes: []
        },
        {
        id: 4,
        tipo: "VI",
        titulo: "Investimentos (Imob)",
        descricao: "Meus investimentos do tipo imobiliário",
        valor: "+ R$510",
        transacoes: []
        },
        {
        id: 5,
        tipo: "VR",
        titulo: "Meus Rendimentos",
        descricao: "Rendimentos consolidados da poupança",
        valor: "+ R$20",
        transacoes: []
        }
    ],
    vps: [
        { id: 1, titulo: "Meu Salário" },
        { id: 10, titulo: "Investimentos" }
    ],
    vrs: [
        { id: 1, titulo: "Meus Rendimentos" },
        { id: 2, titulo: "Rendimentos Poupança" }
    ]
};

const fakeApiCall = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(data);
        }, 500);
    });
};

export const getDashboardData = () => {
    console.log("MOCK API: getDashboardData() chamado");
    return fakeApiCall({
        resumo: mockData.resumo,
        dendrons: mockData.dendrons
    });
};

export const getVPs = () => {
    console.log("MOCK API: getVPs() chamado");
    return fakeApiCall(mockData.vps);
};

export const getVRs = () => {
    console.log("MOCK API: getVRs() chamado");
    return fakeApiCall(mockData.vrs);
};

export const createDendron = (dendronData) => {
    console.log("MOCK API: createDendron() chamado com:", dendronData);
    const newId = Math.floor(Math.random() * 1000);
    const novoDendron = {
        ...dendronData,
        id: newId,
        valor: dendronData.valorInicial || "- R$0",
        transacoes: []
    };
    mockData.dendrons.push(novoDendron);
    
    return fakeApiCall(novoDendron);
};

export const getPerfil = () => {
    console.log("MOCK API: getPerfil() chamado");
    return fakeApiCall({
        nomeCompleto: "Usuário da Silva",
        idade: 25,
        email: "usuario@exemplo.com",
        assinatura: "Plano Gratuito"
    });
};

export const updatePerfil = (perfilData) => {
    console.log("MOCK API: updatePerfil() chamado com:", perfilData);
    return fakeApiCall(perfilData);
};