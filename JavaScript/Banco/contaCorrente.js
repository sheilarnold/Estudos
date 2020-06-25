import { cliente } from "./cliente.js"

export class contaCorrente {
    static nContas = 0
    _cliente
    agencia
    _saldo = 0

    constructor(cli, ag){
        this.agencia = ag
        this.cliente = cli
        contaCorrente.nContas += 1
    }

    set cliente(cli){
        if(cli instanceof cliente){
            this._cliente = cli 
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo;
    }

    saque(valor) {
        if(valor <= this.saldo){
            this._saldo -= valor
            return true
        }else{
            return false
        }
    }

    deposito(valor) {
        if(valor <= 0){
            return false
        }else{
            this._saldo += valor
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