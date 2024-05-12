import {v4 as uuidv4} from 'uuid'

class Pedido{
    constructor({cd_cliente, vl_total, cd_pedido}){
        this.cd_pedido = cd_pedido ?? uuidv4();
        this.cd_cliente = cd_cliente;
        this.vl_total = vl_total ?? 0;
    }
}

export default Pedido;