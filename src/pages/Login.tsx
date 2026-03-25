import Header from "../components/Header";
    import imgLogin from "../assets/img/img-login.png";


export default function Login() {
  return (
    <div>
      <Header />
        <div className="w-full h-full py-10 px-60 justify-center items-center">

      <div className="  h-[70vh] rounded-xl overflow-hidden flex flex-row">
        <img src={imgLogin} className="h-full flex-1"/>
        <div className="flex-1 p-10 flex flex-col justify-center bg-neutral-300 ">
            <h3 className="text-center text-4xl font-extrabold text-black my-5">Entre em sua conta  </h3>
            <input type="text" className="w-full h-10 bg-neutral-100 my-5 text-xl pl-2 rounded-lg" placeholder="Email" name="email"/>
            <input type="text" className="w-full h-10 bg-neutral-100 mb-10 text-xl pl-2 rounded-lg" placeholder="Senha" name="password" />
            <button className="bg-teal-800 text-white font-bold text-3xl p-5 rounded-xl">Entrar</button>
            <div className="flex flex-row justify-between px-1 py-4 items-center">
                <a href="" className="text-teal-800 decoration-solid decoration-teal-800 underline">Recuperar Senha</a>
                <button className="px-4 bg-teal-800 text-white px-2 rounded-lg text-xl font-bold">
                    Cadastre-se
                </button>
            </div>
        </div>
      </div>
    </div>
        </div>
  );
}
