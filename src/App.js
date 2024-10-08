import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todos from "./components/Todos/Todos";
import Mensagem from "./components/Mensagem/Mensagem";
import SideBar from "./components/SideBar/Sidebar";
import { useState } from "react";
function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  return (
    <>
      <Header />
      <div className="main-layout">
        <SideBar setActiveFilter={setActiveFilter} />
        <div className="container">
          <Todos activeFilter={activeFilter} />
          <section className="contato">
            <Mensagem>
              Não há a necessidade de caminhar rápido. Apenas siga caminhando.
            </Mensagem>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default App;
