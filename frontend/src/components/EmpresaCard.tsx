import { Empresa } from "../types/Empresa";
interface Props {
  empresa: Empresa;
}

export default function EmpresaCard({ empresa }: Props) {
  //console.log(empresa);
  console.log(localStorage.getItem("loggedAs"));
  async function executarCompra(){
    const post = {      
        id_buyer : empresa.id,
        id_seller : JSON.parse(localStorage.getItem("loggedAs") as string).id,
        credits_bought : 1
    }

    await axios.post("http://localhost:8080/comprar_creditos", post).then((res)=>{console.log("success:" + res.toString())}).catch((error) => {console.log(error)});
  } 


  return (
    <div className="flex flex-1 flex-col justify-between rounded-xl bg-neutral-300 p-5">
      <div>
        <h1 className="font-nova text-3xl text-black">{empresa.nome}</h1>
        <h2 className="mb-2 text-3xl font-black">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(empresa.preco_unitario)}
          /crédito
        </h2>
        <h3 className="text-xl text-neutral-800">
          Créditos Disponíveis: {empresa.creditos_carbono}
        </h3>
      </div>
      <button className="mt-3 w-full rounded-xl bg-teal-800 p-2 font-nova text-2xl text-white" onClick={executarCompra}>
        Comprar Créditos
      </button>
    </div>
  );
}
