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

interface Empresa {
  nome: string;
  ramo: RamoEmpresa;
  quantidadeCredDisp: number;
  precoUnitario: number;
}
