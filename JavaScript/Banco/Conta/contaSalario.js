import {conta} from "./conta.js";

export class contaSalario extends conta {
    
    constructor(cliente){
        super(0, cliente, 100)
    }

    saque(valor){
        return this._saque(valor, 1.01)
    }
}