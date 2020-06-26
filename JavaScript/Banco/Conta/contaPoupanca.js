import { conta } from "./conta.js"

export class contaPoupanca extends conta{

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
    }

    saque(valor) {
        return this._saque(valor, 1.02)
    }

}