import {v4 as uuidv4} from 'uuid';

class Cliente{
    constructor({nm_cliente, log_cliente, sen_cliente, cd_cliente}){
        this.cd_cliente = cd_cliente ?? uuidv4();
        this.nm_cliente = nm_cliente;
        this.log_cliente = log_cliente;
        this.sen_cliente = sen_cliente;
    }
}

export default Cliente;