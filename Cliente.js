export class Cliente {
    #cpf;
    #senha;

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }

    get cpf() {
        return this.#cpf;
    }

    get senha() {
        return this.#senha
    }

    autenticar(senha) {
        return senha == this.#senha
    }
}