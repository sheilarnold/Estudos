export class funcionario {
    
    constructor(nome, salario, cpf){
        this._nome = nome
        this._salario = salario
        this._cpf = cpf

        this._bonificacao = 1

        this._senha
    }

    autenticacao(senha) {
        return senha == this._senha
    }

    cadastrarSenha(senha) {
        this._senha = senha
    }

}