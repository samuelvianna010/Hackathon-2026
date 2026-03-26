import "../assets/fontawesome/css/fontawesome.css";
import "../assets/fontawesome/css/solid.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex w-screen flex-row items-center gap-5 bg-teal-800 px-10 py-5">
        <h3 className="text-2xl font-bold text-white">Nome da Empresa</h3>
        <nav className="flex flex-1 flex-row justify-between px-40">
          <a href="" className="font-nova text-3xl font-extrabold text-white">
            Home
          </a>
          <a href="" className="font-nova text-3xl font-extrabold text-white">
            Vender Créditos
          </a>
          <a href="" className="font-nova text-3xl font-extrabold text-white">
            Comprar Créditos
          </a>
        </nav>
        <button
          className="flex flex-row items-center gap-4 pl-10"
          onClick={() => navigate("/login")}
        >
          <h3 className="text-xl font-semibold text-white">Usuário</h3>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-teal-900">
            <i className="fa-solid fa-user text-2xl text-teal-100"></i>
          </div>
        </button>
      </header>
    </>
  );
}
