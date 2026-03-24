import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="bg-neutral-300 mx-40 my-10 p-10 rounded-xl flex flex-col gap-5">
        <label
          for="nome-empresa"
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
          <label className="flex-1 flex flex-col font-extrabold text-black gap-3 text-2xl">
            Email
            <input
              className="rounded-md bg-neutral-100 text-black font-normal px-2"
              placeholder="Email da empresa"
            />
          </label>

          <label className=" flex flex-col font-extrabold text-black gap-3 text-2xl">
            Telefone
            <input
              className="rounded-md bg-neutral-100 text-black font-normal px-2"
              placeholder="(XX) XXXXX-XXXX"
            />
          </label>
        </div>

        <label className=" flex flex-col font-extrabold text-black gap-3 text-2xl">
          Detalhes da empresa
          <textarea
            className="rounded-md bg-neutral-100 text-black font-normal px-2 resize-none"
            placeholder="Detalhes da empresa"
            rows={8}
          />
        </label>

        <label className="flex flex-row font-extrabold text-black gap-3 text-2xl">
          Tipo de Empresa
          <select name="tipo-empresa">
            {/* js pra as options em array */}
          </select>
        </label>

        <button className="w-full p-4 bg-teal-800 rounded-3xl">
          <h2 className="text-white text-3xl font-bold">Cadastrar Empresa</h2>
        </button>
      </div>
    </div>
  );
}

export default App;
