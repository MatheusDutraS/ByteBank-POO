import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";

// console.log("\n ",
//     "ContaCorrente: { \n ",
//     " ", contaCorrenteCliente1.cliente, "cpf:" ,contaCorrenteCliente1.cliente.cpf, "\n ",
//     "  saldo:", contaCorrenteCliente1.saldo, "\n ",
//     "  agência:", contaCorrenteCliente1.agencia, "\n ",
//     "} \n"
// );

const diretor = new Diretor('Salem', 11122233344, 10000)
diretor.cadastrarSenha('12345678')

const gerente = new Gerente('Maria', 22233344455, 5000)
gerente.cadastrarSenha('4545')

const cliente = new Cliente('Calisto', 11122233344, '123')

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '12345678')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '4545')
const clienteEstalogado = SistemaAutenticacao.login(cliente, '123')

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstalogado)
