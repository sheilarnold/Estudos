export class conta {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
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
        let taxa = 1
        return this._saque(valor, taxa)
    }

    _saque(valor, taxa){
        if((valor * taxa) <= this.saldo){
            this._saldo -= (valor * taxa)
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