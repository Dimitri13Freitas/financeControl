import React from "react";
import styles from "./Modal.module.css";
import { Input } from "./Input";
import { Button } from "./Button";
import { Radio } from "./Radio";

export const Modal = ({ setInputDesc, setInputValor, setModal, ...props }) => {
  return (
    <div onClick={() => setModal((m) => !m)} className={styles.container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <Input setInput={setInputDesc} label="Descrição" id="desc" />
        <Input setInput={setInputValor} label="Valor" id="valor" />
        <h3 className={styles.h3}>Tipo:</h3>
        <Radio className={styles.entr} label="Entrada" id="entrada" />
        <Radio className={styles.said} label="Saída" id="saida" />
        <Button children="Adicionar" />
      </div>
    </div>
  );
};

