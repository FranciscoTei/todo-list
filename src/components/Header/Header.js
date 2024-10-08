import "./Header.css";
import Saudacao from "../Saudacao/Saudacao";

const Header = () => {
  return (
    <header className="header">
      <h1>Minhas tarefas.</h1>
      <Saudacao nome="Francisco" sobrenome="Teixeira" />
    </header>
  );
};

export default Header;
