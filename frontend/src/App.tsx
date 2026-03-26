import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import "./assets/fonts/NovaRound-Regular.ttf";
import ComprarCreditos from "./pages/ComprarCreditos";

function App() {
  console.log("fetch");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/comprar-creditos" element={<ComprarCreditos />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
