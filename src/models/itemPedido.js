import {v4 as uuidv4} from 'uuid'

class ItemPedido{
    constructor(cd_pedido, cd_item, qua_item_pedido){
        this.cd_pedido = cd_pedido,
        this.cd_item = cd_item,
        this.qua_item_pedido = qua_item_pedido
    }
}