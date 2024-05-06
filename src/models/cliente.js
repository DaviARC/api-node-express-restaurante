import {v4 as uuidv4} from 'uuid';

class Cliente{
    constructor(nm_cliente, des_cliente, cd_cliente){
        this.cd_cliente = cd_cliente ?? uuidv4();
        this.nm_cliente = nm_cliente;
        this.des_cliente = des_cliente;
    }
}

export default Cliente;