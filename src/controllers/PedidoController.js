import client from "../config/dbConnect.js";
import Pedido from "../models/Pedido.js"

export default class ItemController{
    static criarPedido = async(req, res, next)=>{
        try{
            const pedido = new Pedido(req.body);

             await client.query("INSERT INTO res_pedido(cd_pedido, cd_cliente, vl_total) VALUES ($1,$2, $3)", [pedido.cd_pedido, pedido.cd_cliente, pedido.vl_total]);

            res.status(200).send({message: "Item cadastrado"});
        }
        catch(e){
            console.log(e);
        }
    }
    static listarPedidosPorIdCliente = async(req, res, next)=>{
        try{    
            const id = req.params.id;

           const response = await client.query("select res_item.nm_item, res_item_pedido.qua_item_pedido, res_pedido.cd_pedido, res_item.pre_item, TO_CHAR(res_pedido.dt_pedido, 'DD/MM/YYYY HH24:MI') data_inicio from res_item_pedido inner join res_item on res_item.cd_item = res_item_pedido.cd_item inner join res_pedido on res_item_pedido.cd_pedido = res_pedido.cd_pedido where res_pedido.cd_cliente = $1;", [id]);

           res.status(200).send(response.rows)
        }
        catch(e){
            console.log(e);
        }
    }
    static apagarPedido = async(req, res, next)=>{
        try{
            const id = req.params.id;

            client.query("DELETE FROM res_pedido WHERE cd_pedido = $1", [id]);

            res.status(200).send({
                message: "item deletado com sucesso"
            })
        }
        catch(e){
            console.log(e);
        }
    }
}