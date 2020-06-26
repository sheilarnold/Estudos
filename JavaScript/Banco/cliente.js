export class cliente {
    
    constructor(nome, cpf, senha){
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    }

    get cpf(){
        return this._cpf
    }

    autenticacao(senha) {
        return senha == this._senha
    }

    cadastrarSenha(senha) {
        this._senha = senha
    }

}