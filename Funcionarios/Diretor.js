import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    #bonificacao

    constructor(nome, cpf, salario) {
        super(nome, cpf, salario)
        this.#bonificacao = 2
    }
}