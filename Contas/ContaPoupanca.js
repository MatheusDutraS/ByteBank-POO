import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numeroDeContasPoupanca = 0;
    #saldo;

    constructor(cliente, agencia, saldoInicial) {
        super(cliente, agencia, saldoInicial)
        ContaPoupanca.numeroDeContasPoupanca++
    }

    sacar(valor) {
        let taxa = 1.02
        return this.getCalculoSaque(valor, taxa)
    }
}