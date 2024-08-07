import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    static numeroDeContasSalario = 0;

    constructor(cliente) {
        super(cliente, 100, 0);

        ContaSalario.numeroDeContas++;
    }

    sacar(valor) {
        const taxa = 1.01;
        return this.getCalculoSaque(valor, taxa)
    }
}