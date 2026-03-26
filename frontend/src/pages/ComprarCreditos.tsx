import { useEffect, useState } from "react";
import EmpresaCard from "../components/EmpresaCard";
import Header from "../components/Header";
import { wait } from "@testing-library/user-event/dist/utils";
import { Empresa } from "../types/Empresa";

interface State {
  empresas: Empresa[];
}

export default function ComprarCreditos() {
  const [state, setState] = useState({
    empresas: [],
  } as State);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8080/empresas");
      const data: object[] = await res.json();
      setState({
        empresas: data as Empresa[],
      });
      console.log(data);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      <Header />

      <div className="flex max-w-[1200px] flex-col items-center py-10">
        <h2 className="pb-6 font-nova text-4xl font-black text-black">
          Comprar Créditos
        </h2>
        <div className="grid grid-flow-row grid-cols-3 gap-5">
          {state.empresas.map((e: Empresa) => (
            <EmpresaCard empresa={e as Empresa} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
