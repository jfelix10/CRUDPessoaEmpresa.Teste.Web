export interface Cliente {
    nomeRazaoSocial: string;
    cpfCnpj: string;
    dataNascimento: Date;
    telefone: string;
    email: string;
    cep: string;
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    pessoaFisica: boolean;
    inscricaoEstadual?: string;
}