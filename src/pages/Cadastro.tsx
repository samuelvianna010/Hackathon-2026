import Header from "../components/Header";

const ramosEmpresa = [
  ["Energia Renovável (Solar, Eólica, Hidrelétrica)", "energia-renovavel"],
  ["Agronegócio Sustentável", "agronegocio-sustentavel"],
  ["Reflorestamento e Silvicultura", "reflorestamento-silvicultura"],
  ["Indústria de Manufatura", "industria-manufatura"],
  ["Transporte e Logística", "transporte-logistica"],
  ["Construção Civil Sustentável", "construcao-civil"],
  ["Tecnologia e Software Verde", "tecnologia-verde"],
  ["Gestão de Resíduos", "gestao-residuos"],
  ["Reciclagem", "reciclagem"],
  ["Mineração", "mineracao"],
  ["Petróleo e Gás", "petroleo-gas"],
  ["Consultoria Ambiental", "consultoria-ambiental"],
  ["Créditos de Carbono e ESG", "creditos-carbono-esg"],
  ["Setor Financeiro (Bancos, Investimentos ESG)", "financeiro-esg"],
  ["Turismo Sustentável", "turismo-sustentavel"],
  ["Alimentação e Bebidas", "alimentacao-bebidas"],
  ["Moda Sustentável", "moda-sustentavel"],
  ["Química e Petroquímica", "quimica-petroquimica"],
  ["Educação e Pesquisa Ambiental", "educacao-ambiental"],
  ["Organizações Não Governamentais (ONGs)", "ongs"],
];

const dropdownOptions = () => {
  return ramosEmpresa.map(([label, value]) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));
};

export default function Cadastro() {
  return (
    <div>
      <Header />

      <div className="bg-neutral-300 mx-40 my-10 p-10 rounded-xl flex flex-col gap-5">
        <label
          htmlFor="nome-empresa"
          className="flex flex-col font-extrabold text-black gap-3 text-2xl"
        >
          Nome da Empresa
          <input
            type="text"
            name="nome-empresa"
            className="rounded-md  bg-neutral-100 text-black font-normal px-2"
            placeholder="Nome da Empresa"
          />
        </label>

        <div className="flex w-full gap-4">
          <label className="flex-1 flex flex-col font-extrabold text-black gap-3 text-2xl"
          htmlFor="email-empresa">
            Email
            <input
              className="rounded-md bg-neutral-100 text-black font-normal px-2"
              placeholder="Email da empresa"
            />
          </label>

          <label className="flex flex-col font-extrabold text-black gap-3 text-2xl"
          htmlFor="telefone-empresa">
            Telefone
            <input
              className="rounded-md bg-neutral-100 text-black font-normal px-2"
              placeholder="(XX) XXXXX-XXXX"
            />
          </label>
        </div>

        <label className="flex flex-row font-extrabold text-black gap-3 text-2xl"
        htmlFor="ramo-empresa">
          Ramo da Empresa
          <select
            name="ramo-empresa"
            className="font-normal text-black text-xl pl-2 bg-neutral-100 rounded-lg"
          >
            <option title="Escolha um tipo" value={""} />
            {dropdownOptions()}
          </select>
        </label>

        <button className="w-full p-4 bg-teal-800 rounded-3xl">
          <h2 className="text-white text-3xl font-bold">Cadastrar Empresa</h2>
        </button>
      </div>
    </div>
  );
}
