import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipuladorDeErros(erro, req, res, next){
  if(erro instanceof RequisicaoIncorreta){
    erro.enviarResposta(res);
  } 
  else if(erro instanceof NaoEncontrado){
    erro.enviarResposta(res);
  }
  else if(erro instanceof ErroBase){
    erro.enviarResposta(res);
  }
  else
  {
    new ErroBase().enviarResposta(res);
  } 
}

export default manipuladorDeErros;