export class Conta{
    #agencia;
    #cliente;
    #saldo;

    constructor(cliente, agencia, saldoInicial) {
        if (this.constructor == Conta) {  //Torna a classe abstrata
            throw new Error('Não instancie um objeto do tipo Conta diretamente, esta é uma classe anbstrata.')
        }
        // this.#cliente = new Cliente(nome, cpf)
        this.#cliente = cliente
        this.#agencia = agencia;
        this.#saldo = saldoInicial;
    }

    get cliente() {
        return this.#cliente
    }

    get saldo() {
        return this.#saldo;
    }
    
    set saldo(valor) {
        this.#saldo = valor
    }

    get agencia() {
        return this.#agencia
    }

    //Forma para acessar o método privado #calculoSaque fora da Classe conta
    getCalculoSaque(valor, taxa) {
        return this.#calculoSaque(valor, taxa)
    }

    //Método abstrato
    sacar(valor) {
        throw new Error('O método sacar da Conta é abstrato')
    }

    //Método privado
    #calculoSaque(valor, taxa) {
        const valorSacado = taxa * valor
        if (this.saldo >= valorSacado && valorSacado > 0) {
            this.saldo -= valorSacado;
            return valorSacado;
        }
        return 0;

    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}