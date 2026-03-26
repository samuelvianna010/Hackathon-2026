import EmpresaCard from "../components/EmpresaCard";
import Header from "../components/Header";

const empresasTEMP = [
  {
    nome: "EcoLuz Solutions",
    ramo: "Energia Renovável (Solar, Eólica, Hidrelétrica)",
    quantidadeCredDisp: 1540.5,
    precoUnitario: 28.9,
  },
  {
    nome: "AgroFuturo Ltda",
    ramo: "Agronegócio Sustentável",
    quantidadeCredDisp: 3200.0,
    precoUnitario: 22.5,
  },
  {
    nome: "VerdeVivo Silvicultura",
    ramo: "Reflorestamento e Silvicultura",
    quantidadeCredDisp: 5000.75,
    precoUnitario: 35.0,
  },
  {
    nome: "Manufatura Clean Tech",
    ramo: "Indústria de Manufatura",
    quantidadeCredDisp: 850.25,
    precoUnitario: 18.4,
  },
  {
    nome: "LogiGreen Transportes",
    ramo: "Transporte e Logística",
    quantidadeCredDisp: 1200.0,
    precoUnitario: 25.1,
  },
  {
    nome: "Construa Sustentável",
    ramo: "Construção Civil Sustentável",
    quantidadeCredDisp: 980.6,
    precoUnitario: 30.0,
  },
  {
    nome: "CodeCarbon Software",
    ramo: "Tecnologia e Software Verde",
    quantidadeCredDisp: 450.0,
    precoUnitario: 40.5,
  },
  {
    nome: "Gestão Resíduos Pro",
    ramo: "Gestão de Resíduos",
    quantidadeCredDisp: 2100.3,
    precoUnitario: 15.75,
  },
  {
    nome: "CicloNovo Reciclagem",
    ramo: "Reciclagem",
    quantidadeCredDisp: 1800.0,
    precoUnitario: 12.9,
  },
  {
    nome: "MineraTech Extração",
    ramo: "Mineração",
    quantidadeCredDisp: 600.5,
    precoUnitario: 45.0,
  },
  {
    nome: "EnergyTransição Petróleo",
    ramo: "Petróleo e Gás",
    quantidadeCredDisp: 300.0,
    precoUnitario: 55.2,
  },
  {
    nome: "EcoConsult Ambiental",
    ramo: "Consultoria Ambiental",
    quantidadeCredDisp: 100.0,
    precoUnitario: 150.0,
  },
  {
    nome: "CarbonoMarket Credits",
    ramo: "Créditos de Carbono e ESG",
    quantidadeCredDisp: 10000.0,
    precoUnitario: 32.5,
  },
  {
    nome: "BancoVerde Investimentos",
    ramo: "Setor Financeiro (Bancos, Investimentos ESG)",
    quantidadeCredDisp: 5000.0,
    precoUnitario: 38.0,
  },
  {
    nome: "ViajeLeve Turismo",
    ramo: "Turismo Sustentável",
    quantidadeCredDisp: 250.75,
    precoUnitario: 20.0,
  },
  {
    nome: "SaborSustentavel Alimentos",
    ramo: "Alimentação e Bebidas",
    quantidadeCredDisp: 750.0,
    precoUnitario: 19.5,
  },
  {
    nome: "ModaConsciente Têxtil",
    ramo: "Moda Sustentável",
    quantidadeCredDisp: 400.2,
    precoUnitario: 27.8,
  },
  {
    nome: "QuimicaVerde Indústria",
    ramo: "Química e Petroquímica",
    quantidadeCredDisp: 1100.0,
    precoUnitario: 42.1,
  },
  {
    nome: "EduAmbiental Pesquisa",
    ramo: "Educação e Pesquisa Ambiental",
    quantidadeCredDisp: 50.0,
    precoUnitario: 100.0,
  },
  {
    nome: "OngAçãoVerde",
    ramo: "Organizações Não Governamentais (ONGs)",
    quantidadeCredDisp: 2000.0,
    precoUnitario: 10.0,
  },
];

export default function ComprarCreditos() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />

      <div className="flex max-w-[1200px] flex-col items-center py-10">
        <h2 className="pb-6 font-nova text-4xl font-black text-black">
          Comprar Créditos
        </h2>
        <div className="grid grid-flow-row grid-cols-3 gap-5">
          {empresasTEMP.map((e) => (
            <EmpresaCard
              empresa={{
                ...e,
                ramo: e.ramo as RamoEmpresa, // 👈 Isso aqui resolve seu problema
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
