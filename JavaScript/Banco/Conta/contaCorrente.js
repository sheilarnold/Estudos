import { conta } from "./conta.js"

export class contaCorrente extends conta {
    static nContas = 0

    constructor(agencia, cliente) {
        super(0, agencia, cliente)
        contaCorrente.nContas += 1
    }

    //sobreescrevendo o comportamento de sacar
    saque(valor) {
        return this._saque(valor, 1.1)
    }

}