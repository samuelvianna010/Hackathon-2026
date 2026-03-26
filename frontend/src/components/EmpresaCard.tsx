interface Props {
  empresa: Empresa;
}

export default function EmpresaCard({ empresa }: Props) {
  //console.log(empresa);
  return (
    <div className="flex flex-1 flex-col justify-between rounded-xl bg-neutral-300 p-5">
      <div>
        <h1 className="font-nova text-3xl text-black">{empresa.nome}</h1>
        <h2 className="mb-2 text-3xl font-black">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(empresa.precoUnitario)}
          /crédito
        </h2>
        <h3 className="text-xl text-neutral-800">
          Créditos Disponíveis: {empresa.quantidadeCredDisp}
        </h3>
      </div>
      <button className="mt-3 w-full rounded-xl bg-teal-800 p-2 font-nova text-2xl text-white">
        Comprar Créditos
      </button>
    </div>
  );
}
