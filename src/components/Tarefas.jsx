import React, { Component, Fragment } from "react";
export default class Tarefas extends Component {
  render() {
    const tarefas = ["Tarefas 1", "Tarefas 2", "Tarefas 3"];
    return (
      <Fragment>
        <h1> Trefas </h1>;
        <input />
        <button>Adicionar</button>
        <ul>
          {tarefas.map((tarefa) => (
            <li>{tarefa}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
