export class cliente {
    
    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf
    }

    get cpf(){
        return this._cpf
    }

}