import {cliente} from './cliente.js'
import {contaCorrente} from './Conta/contaCorrente.js'
import {contaPoupanca} from './Conta/contaPoupanca.js'
import {diretor} from './Funcionarios/diretor.js'
import {gerente} from './Funcionarios/gerente.js'
import {sistemaAutenticacao} from './sistemaAutenticacao.js'


const c1 = new cliente("Sheila C.S Arnold", 11166622233)
//const conta1 = new contaCorrente(c1 , 10001)

/*
if(conta1.deposito(10000)){
    console.log("Depósito realizado com sucesso!")
}else{
    console.log("Erro ao depositar, por favor, verifique novamente os dados para depósito...")
}

const c2 = new cliente("Santiago Perez Caroni", 22233388866)
const conta2 = new contaCorrente(c2, 10001)

console.log("CLIENTE: " + c1.nome + "\n CPF: " + c1.cpf + "\n AGÊNCIA: " + conta1.agencia + "\n SALDO: " + conta1._saldo + "\nCLIENTE:" + c2.nome + "\n CPF: " + c2.cpf + "\n AGÊNCIA: " + conta2.agencia + "\n SALDO: " + conta2.saldo)

if(conta1.transferir(500, conta2)){
    console.log("\n\nValor transferido com sucesso!\n\n")
}else{
    console.log("\n\nErro ao transferir valor! Por favor, verifique as informações e tente novamente mais tarde.\n\n")
}

console.log("CLIENTE: " + c1.nome + "\n CPF: " + c1.cpf + "\n AGÊNCIA: " + conta1.agencia + "\n SALDO: " + conta1._saldo + "\nCLIENTE:" + c2.nome + "\n CPF: " + c2.cpf + "\n AGÊNCIA: " + conta2.agencia + "\n SALDO: " + conta2.saldo)*/
/*
const cPoupanca1 = new contaPoupanca(50, c1, 10001)

console.log(conta1)
console.log(cPoupanca1)*/

const diretor1 = new diretor("Fernando Duarte", 10000, 12345678900)
const gerente1 = new gerente("Daniele Zanini", 5000, 12345678910)

diretor1.cadastrarSenha("123456789")
c1.cadastrarSenha("123")

console.log("DIRETOR: " + sistemaAutenticacao.login(diretor1, "123456789"))
console.log("CLIENTE: " + sistemaAutenticacao.login(c1, "123"))

console.log("\n***No total temos " + contaCorrente.nContas + " conta(s) registrada(s) no banco!***")
