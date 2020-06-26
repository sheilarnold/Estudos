export class sistemaAutenticacao {

    static login(usuario, senha) {
        if(sistemaAutenticacao.autenticavel(usuario)){
            return usuario.autenticacao(senha)
        }else{
            return false
        }
    }

    static autenticavel(usuario) {
        //verifica se a função de autenticação existe e se a chave está presente dentro de uma função
        return "autenticacao" in usuario && usuario.autenticacao instanceof Function
    }
}