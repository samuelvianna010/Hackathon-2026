import Header from "../components/Header";
import imgLogin from "../assets/img/img-login.png";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Empresa } from "../types/Empresa";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLogged") as string)) {
      navigate("/comprar-creditos");
    }
  }, []);

  const [state, setState] = useState({
    emailInput: "",
    passwordInput: "",
    empresa: {} as Empresa,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8080/empresas");
      const data: object[] = await res.json();
      setState((old) => ({
        ...old,
        empresa: data[0] as Empresa,
      }));
      console.log(data);
    })();
  });
  function tryLogin(email: string, password: string) {
    console.log("Email:", email);
    console.log("Senha:", password);

    localStorage.setItem("isLogged", "true");
    localStorage.setItem("loggedAs", JSON.stringify(state.empresa));
    navigate("/login");
    window.location.reload();
  }
  return (
    <div>
      <Header />
      <div className="h-full w-full items-center justify-center px-60 py-10">
        <div className="flex h-[70vh] flex-row overflow-hidden rounded-xl">
          <img
            src={imgLogin}
            className="h-full flex-1"
            alt="Login ilustração"
          />
          <div className="flex flex-1 flex-col justify-center bg-neutral-300 p-10">
            <h3 className="my-5 text-center font-nova text-4xl font-extrabold text-black">
              Entre em sua conta
            </h3>
            <input
              type="email"
              className="my-5 h-10 w-full rounded-lg bg-neutral-100 pl-2 text-xl"
              placeholder="Email"
              name="emailInput"
              value={state.emailInput}
              onChange={handleChange}
            />
            <input
              type="password"
              className="mb-10 h-10 w-full rounded-lg bg-neutral-100 pl-2 text-xl"
              placeholder="Senha"
              name="passwordInput"
              value={state.passwordInput}
              onChange={handleChange}
            />
            <button
              className="rounded-xl bg-teal-800 p-5 font-nova text-3xl font-bold text-white"
              onClick={() => tryLogin(state.emailInput, state.passwordInput)}
            >
              Entrar
            </button>
            <div className="flex flex-row items-center justify-between px-1 py-4">
              <a
                href="#"
                className="text-teal-800 underline decoration-teal-800 decoration-solid"
              >
                Recuperar Senha
              </a>
              <button className="rounded-lg bg-teal-800 px-4 font-nova text-xl font-bold text-white">
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
