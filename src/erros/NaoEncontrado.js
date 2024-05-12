import ErroBase from './ErroBase.js'

class NaoEncontrado extends ErroBase{
    constructor(mensagem = "Página não encontrada", status = 404){
        super(mensagem, status);
    }
}

export default NaoEncontrado