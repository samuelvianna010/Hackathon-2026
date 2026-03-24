export default function Header() {
  return (
    <>
      <header className="bg-teal-800 flex flex-row items-center px-10 py-5 gap-5">
        <h3 className="text-white text-2xl font-bold">Nome da Empresa</h3>
        <nav className="flex flex-1 flex-row justify-between">
          <a href="" className="text-white text-xl font-extrabold">
            Home
          </a>
          <a href="" className="text-white text-xl font-extrabold">
            Vender Créditos
          </a>
          <a href="" className="text-white text-xl font-extrabold">
            Comprar Créditos
          </a>
        </nav>
        <div className="flex flex-row gap-4 items-center">
          <h3 className="text-white text-xl">Usuário</h3>
          <svg className="w-[60px] h-[60px] flex items-center justify-center">
            <circle cx="30" cy="30" r="30" fill="white" />
          </svg>
        </div>
      </header>
    </>
  );
}
