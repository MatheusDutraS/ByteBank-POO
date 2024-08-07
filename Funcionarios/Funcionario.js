export class Funcionario {
    #nome;
    #cpf;
    #salario;
    #bonificacao;
    #senha;

    constructor(nome, cpf, salario) {
        this.#nome;
        this.#cpf;
        this.#salario;
        this.#bonificacao = 1;
    }

    cadastrarSenha(senha) {
        this.#senha = senha
    }

    autenticar(senha) {
        return senha == this.#senha
    }
}