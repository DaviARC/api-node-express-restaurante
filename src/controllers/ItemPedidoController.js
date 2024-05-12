import client from "../config/dbConnect.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ItemPedido from "../models/ItemPedido.js"

export default class ItemController{
    static criarItemPedido = async(req, res, next)=>{
        try{
            const itemPedido = new ItemPedido(req.body);

            const response = await client.query("INSERT INTO res_item_pedido(cd_pedido, cd_item, qua_item_pedido) VALUES ($1,$2,$3)", [itemPedido.cd_pedido, itemPedido.cd_item, itemPedido.qua_item_pedido]);

            const item = await client.query(`SELECT res_item.pre_item, res_pedido.vl_total FROM res_item INNER JOIN res_item_pedido on res_item_pedido.cd_item = res_item.cd_item INNER JOIN res_pedido on res_item_pedido.cd_pedido = res_pedido.cd_pedido where res_item_pedido.cd_item = $1
            `, [itemPedido.cd_item])

            let valorTotal = parseFloat(item.rows[0].vl_total);
            const preItem = parseFloat(item.rows[0].pre_item);
            valorTotal += preItem * itemPedido.qua_item_pedido;

            console.log(valorTotal);

            await client.query('UPDATE res_pedido SET vl_total = $1', [valorTotal]);
            res.status(200).send({message: "ItemPedido cadastrado"});
        }
        catch(e){
            console.log(e);
        }
    }
    static listarItemPedidoPorId = async(req, res, next)=>{
        try{
            const id = req.params.id;

            const response = await client.query("SELECT * FROM res_item_pedido WHERE cd_item = $1", [id]);

           if(response.rowCount !== 0){
                res.status(200).send(response.rows);
            }else
            {
                next(new NaoEncontrado("O id do itemPedido não localizado."))
            }
        }   
        catch(e){
            console.log(e);
        }       
    }
    static apagarItemPedido = async(req, res, next)=>{
        try{
            const id = req.params.id;

            const response = await client.query("DELETE FROM res_item_pedido WHERE cd_item = $1", [id]);

            if(response.rowCount !== 0){
                res.status(200).send({
                    message: "ItemPedido deletado com sucesso"
                })
            }else
            {
                next(new NaoEncontrado("O id do itemPedido não localizado."))
            }
        }
        catch(e){
            console.log(e);
        }
    }
    static atualizarQuantidade = async(req, res, next)=>{
        try{
    
            const quantidade = req.params.quantidade

            await client.query("UPDATE res_item_pedido SET qua_item_pedido = $1", [quantidade]);

            res.status(200).send({
                message: "Item pedido atualizado com sucesso",
            })
        }
        catch(e){
            if(e.code = '42703'){
                next(new RequisicaoIncorreta());
            }
            console.log(e);
        }
    }
}