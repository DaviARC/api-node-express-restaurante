import {v4 as uuidv4} from 'uuid'

class Item{
    constructor(cd_categoria, cd_restaurante, nm_item, pre_item, des_item, cd_item){
        this.cd_item = cd_item ?? uuidv4();
        this.cd_categoria = cd_categoria;
        this.cd_restaurante = cd_restaurante;
        this.nm_item = nm_item;
        this.pre_item = pre_item;
        this.des_item = des_item;
    }
}

export default Item