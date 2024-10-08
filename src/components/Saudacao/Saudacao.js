import "./Saudacao.css";
function Saudacao({ nome = "usuário", sobrenome }) {

  return (
    (
      <h2>
        Bem vindo, <br></br>
      </h2>
    ),
    (
      <h2>
        Bem vindo,<br></br>
        {nome} {sobrenome}
      </h2>
    )
  );
}

export default Saudacao;
