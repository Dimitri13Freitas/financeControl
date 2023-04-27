import { ArrowFatLinesDown, ArrowFatLinesUp, X } from "@phosphor-icons/react";
import React from "react";

export const DataTable = ({ data, ...props }) => {
  return (
    <div className="tbody">
      {data.map((e, i) => {
        const teste = e.tipo === "entrada";
        return (
          <>
            <div key={i} className={teste ? "row entrada" : "row saida"}>
              <div className="cell s">{e.desc}</div>
              <div className="cell dir s">{e.valor}</div>
              {teste ? (
                <div className="cell dir">
                  <ArrowFatLinesUp size={34} color="#77fef9" />
                </div>
              ) : (
                <div className="cell dir">
                  <ArrowFatLinesDown size={34} color="#8A8FFC" />
                </div>
              )}
              {teste ? (
                <div className="cell dir">
                  <X size={34} color="#77fef9" />
                </div>
              ) : (
                <div className="cell dir">
                  <X size={34} color="#8A8FFC" />
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

