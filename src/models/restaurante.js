import {v4 as uuidv4} from 'uuid'

class Restaurante{
    constructor({nom_restaurante, cnpj_restaurante, cd_restaurante, sob_restaurante}){
        this.cd_restaurante  = cd_restaurante ?? uuidv4();
        this.nom_restaurante = nom_restaurante;
        this.cnpj_restaurante = cnpj_restaurante;
        this.sob_restaurante = sob_restaurante;
    }
}

export default Restaurante