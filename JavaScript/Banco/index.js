import {cliente} from './cliente.js'
import {contaCorrente} from './contaCorrente.js'

const conta1 = new contaCorrente()
conta1.cliente = new cliente()
conta1.cliente.nome = "Sheila C.S Arnold"
conta1.cliente.cpf = 11166622233
conta1.agencia = 10001

if(conta1.deposito(10000)){
    console.log("Depósito realizado com sucesso!")
}else{
    console.log("Erro ao depositar, por favor, verifique novamente os dados para depósito...")
}

const conta2 = new contaCorrente()
conta2.cliente = new cliente()
conta2.cliente.nome = "Santiago Perez Caroni"
conta2.cliente.cpf = 22233388866
conta2.agencia = 10001

console.log("CLIENTE: " + conta1.cliente.nome + "\n CPF: " + conta1.cliente.cpf + "\n AGÊNCIA: " + conta1.agencia + "\n SALDO: " + conta1.saldo + "\nCLIENTE:" + conta2.cliente.nome + "\n CPF: " + conta2.cliente.cpf + "\n AGÊNCIA: " + conta2.agencia + "\n SALDO: " + conta2.saldo)

if(conta1.transferir(500, conta2)){
    console.log("\n\nValor transferido com sucesso!\n\n")
}else{
    console.log("\n\nErro ao transferir valor! Por favor, verifique as informações e tente novamente mais tarde.\n\n")
}

console.log("CLIENTE: " + conta1.cliente.nome + "\n CPF: " + conta1.cliente.cpf + "\n AGÊNCIA: " + conta1.agencia + "\n SALDO: " + conta1.saldo + "\nCLIENTE:" + conta2.cliente.nome + "\n CPF: " + conta2.cliente.cpf + "\n AGÊNCIA: " + conta2.agencia + "\n SALDO: " + conta2.saldo)