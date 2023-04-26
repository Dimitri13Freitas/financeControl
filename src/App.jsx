import React from "react";
import {
  Money,
  ArrowFatLinesUp,
  ListPlus,
  ArrowFatLinesDown,
} from "@phosphor-icons/react";

function App() {
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
            <button className="add">
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
            <input type="text" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Profissão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>João</td>
                <td>25</td>
                <td>Desenvolvedor</td>
              </tr>
              <tr>
                <td>Maria</td>
                <td>30</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>Carlos</td>
                <td>40</td>
                <td>Gerente de projeto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;

