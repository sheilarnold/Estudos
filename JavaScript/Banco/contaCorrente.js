export class contaCorrente {
    cliente
    agencia
    saldo = 0

    saque(valor) {
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        }else{
            return false
        }
    }

    deposito(valor) {
        if(valor <= 0){
            return false
        }else{
            this.saldo += valor
            return true
        }
    }

    transferir(valor, conta){
        if(this.saque(valor)){
            conta.deposito(valor)
            return true
        }else{
            return false
        }
    }
}