import {v4 as uuidv4} from 'uuid'

class Categoria{
    constructor({cd_categoria, nm_categoria, des_categoria}){
        this.cd_categoria = cd_categoria ?? uuidv4();
        this.nm_categoria = nm_categoria;
        this.des_categoria = des_categoria;
    }
}

export default Categoria