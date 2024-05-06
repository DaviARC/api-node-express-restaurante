import {v4 as uuidv4} from 'uuid'

class Categoria{
    constructor(nom_restaurante, cnpj_restaurante, cd_restaurante){
        this.cd_resurante = cd_restaurante ?? uuidv4();
        this.nom_restaurante = nom_restaurante;
        this.cnpj_restaurante = cnpj_restaurante;
    }
}

export default Categoria