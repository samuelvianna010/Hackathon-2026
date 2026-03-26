type RamoEmpresa =
  | "Energia Renovável (Solar, Eólica, Hidrelétrica)"
  | "Agronegócio Sustentável"
  | "Reflorestamento e Silvicultura"
  | "Indústria de Manufatura"
  | "Transporte e Logística"
  | "Construção Civil Sustentável"
  | "Tecnologia e Software Verde"
  | "Gestão de Resíduos"
  | "Reciclagem"
  | "Mineração"
  | "Petróleo e Gás"
  | "Consultoria Ambiental"
  | "Créditos de Carbono e ESG"
  | "Setor Financeiro (Bancos, Investimentos ESG)"
  | "Turismo Sustentável"
  | "Alimentação e Bebidas"
  | "Moda Sustentável"
  | "Química e Petroquímica"
  | "Educação e Pesquisa Ambiental"
  | "Organizações Não Governamentais (ONGs)";

export interface Empresa {
  id: number;
  nome: string;
  tipo_empresa: RamoEmpresa;
  telefone: string;
  saldo: number;
  creditos_carbono: number;
  preco_unitario: number;
}
