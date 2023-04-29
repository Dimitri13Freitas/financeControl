import React from "react";
import { DataTable } from "./components/DataTable";
import { Modal } from "./components/Modal";
import {
  Money,
  ArrowFatLinesUp,
  ListPlus,
  ArrowFatLinesDown,
} from "@phosphor-icons/react";

function App() {
  const [inputDesc, setInputDesc] = React.useState("");
  const [inputValor, setInputValor] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [dados, setDados] = React.useState([
    {
      desc: "Alimentação",
      valor: 400,
      tipo: "saida",
    },
    {
      desc: "Salário",
      valor: 1500,
      tipo: "entrada",
    },
  ]);

  React.useState(() => {
    console.log(inputDesc);
  }, [inputDesc]);

  return (
    <>
      <header>
        <h1>Controle de finanças</h1>
      </header>
      <main>
        <div className="container">
          <div className="containerPanels">
            <div className="panel total">
              <div>
                <h2>Total</h2>
                <Money size={34} color="#F7FBFF" />
              </div>
              <span>R$ 1.700,00</span>
            </div>
            <div className="panel entrada">
              <div>
                <h2>Entrada</h2>
                <ArrowFatLinesUp size={34} color="#77fef9" />
              </div>
              <span>R$ 1.700,00</span>
            </div>
          </div>
          <div className="btnGamb">
            <button
              onClick={() => {
                setModal(!modal);
              }}
              className="add"
            >
              <ListPlus size={34} color="#141414" />
              Adicionar
            </button>
          </div>
        </div>
        <div className="tableContents">
          <div className="panelAndSearchBar">
            <div className="panel saida">
              <div>
                <h2>Saída</h2>
                <ArrowFatLinesDown size={34} color="#8A8FFC" />
              </div>
              <span>R$ 1.700,00</span>
            </div>
          </div>
          <div className="table">
            <div className="row header">
              <div className="cell m">Descrição</div>
              <div className="cell dir">Valor</div>
              <div className="cell  dir">Tipo</div>
            </div>
            <DataTable data={dados} />
          </div>
        </div>
      </main>
      {modal && (
        <Modal
          setInputDesc={setInputDesc}
          setInputValor={setInputValor}
          setModal={setModal}
        />
      )}
    </>
  );
}

export default App;

