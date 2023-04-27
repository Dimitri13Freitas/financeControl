import React from "react";
import styles from "./Modal.module.css";
import { Input } from "./Input";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export const Modal = ({ setModal, ...props }) => {
  return (
    <div onClick={() => setModal((m) => !m)} className={styles.container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <Input label="Descrição" id="desc" />
        <Input label="Valor" id="valor" />
        <h3>Tipo</h3>
        <Checkbox label="Entrada" id="entrada" />
        <Checkbox label="Saída" id="saida" />
        <Button children="Adicionar" />
      </div>
    </div>
  );
};

