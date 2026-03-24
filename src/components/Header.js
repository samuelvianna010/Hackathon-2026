import "../assets/fontawesome/css/fontawesome.css";
import "../assets/fontawesome/css/solid.css";

export default function Header() {
  return (
    <>
      <header className="bg-teal-800 flex flex-row items-center px-10 py-5 gap-5">
        <h3 className="text-white text-2xl font-bold">Nome da Empresa</h3>
        <nav className="flex flex-1 flex-row justify-between px-40">
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
        <div className="flex flex-row gap-4 items-center pl-10">
          <h3 className="text-white text-xl font-semibold">Usuário</h3>
          <div className="w-[60px] h-[60px] bg-teal-900 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-user text-teal-100 text-2xl"></i>
          </div>
        </div>
      </header>
    </>
  );
}
