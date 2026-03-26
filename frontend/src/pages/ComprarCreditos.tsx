import { useEffect, useState } from "react";
import EmpresaCard from "../components/EmpresaCard";
import Header from "../components/Header";
import { wait } from "@testing-library/user-event/dist/utils";
import { Empresa } from "../types/Empresa";
import axios from "axios"
interface State {
  empresas: Empresa[];
}

export default function ComprarCreditos() {
  const [state, setState] = useState({
    empresas: [],
  } as State);

  const [user, setUser] = useState({dif:localStorage.getItem("loggedAs")})

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8080/empresas");
      const data: object[] = await res.json();
      
      setState({
        empresas: data as Empresa[],
      });
      console.log(data);
    })();
  }, [user]);


  async function onBuy(empresa : Empresa){
    var user = JSON.parse(localStorage.getItem("loggedAs") as string) as Empresa;
    if (user.id == undefined) {return}
    const post = {      
        id_buyer : user.id,
        id_seller : empresa.id,
        credits_bought : 1
    }
    console.log(post)
    await axios.post("http://localhost:8080/comprar_creditos", post).then((res)=>{console.log("success:")}).catch((error) => {console.log(error)});

    var user_data = ((await axios.get("http://localhost:8080/empresa", {params: {id: user.id}})) as {data:Array<object>}).data[0]
    console.log(user_data)
    localStorage.setItem("loggedAs", JSON.stringify(user_data))
    
    setUser({dif:user_data.toString()})

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      <Header />

      <div className="flex max-w-[1200px] flex-col items-center py-10">
        <h2 className="pb-6 font-nova text-4xl font-black text-black">
          Comprar Créditos
        </h2>
        <div className="grid grid-flow-row grid-cols-3 gap-5">
          {state.empresas.map((e: Empresa) => (
            <EmpresaCard empresa={e as Empresa} onBuy={onBuy} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
