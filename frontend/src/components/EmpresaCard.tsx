import { Empresa } from "../types/Empresa";
import axios from 'axios';

interface Props {
 empresa: Empresa;
  onBuy: CallableFunction;
}

export default function EmpresaCard(props : Props) {
  //console.log(props.empresa);
  //console.log(localStorage.getItem("loggedAs"));
  async function executarCompra(){
    props.onBuy(props.empresa)
    
  } 


  return (
    <div className="flex flex-1 flex-col justify-between rounded-xl bg-neutral-300 p-5">
      <div>
        <h1 className="font-nova text-3xl text-black">{props.empresa.nome}</h1>
        <h2 className="mb-2 text-3xl font-black">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.empresa.preco_unitario)}
          /crédito
        </h2>
        <h3 className="text-xl text-neutral-800">
          Créditos Disponíveis: {props.empresa.creditos_carbono}
        </h3>
      </div>
      <button className="mt-3 w-full rounded-xl bg-teal-800 p-2 font-nova text-2xl text-white" onClick={executarCompra}>
        Comprar Créditos
      </button>
    </div>
  );
}
