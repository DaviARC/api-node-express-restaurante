import client from "../config/dbConnect.js";
import Cliente from "../models/Cliente.js"

export default class ClienteController{
    static criarCliente = async(req, res, next)=>{
        try{
            const cliente = new Cliente(req.body);

            const response = await client.query("INSERT INTO res_cliente VALUES ($1,$2,$3,$4)", [cliente.cd_cliente, cliente.nm_cliente, cliente.log_cliente, cliente.sen_cliente]);

            res.status(200).send({message: "Cliente cadastrado"});
        }
        catch(e){
            console.log(e);
        }
    }
    static listarClientes = async(req, res, next)=>{
        try{
           const response = await client.query("SELECT * FROM res_cliente");

           res.status(200).send(response.rows)
        }
        catch(e){
            console.log(e);
        }
    }
    static listarClientePorId = async(req, res, next)=>{
        try{
            const id = req.params.id;

            const response = await client.query("SELECT * FROM res_cliente WHERE cd_cliente = $1", [id]);

            res.status(200).send(response.rows);
        }   
        catch(e){
            console.log(e);
        }       
    }
    static apagarCliente = async(req, res, next)=>{
        try{
            const id = req.params.id;

            client.query("DELETE FROM res_cliente WHERE cd_cliente = $1", [id]);

            res.status(200).send({
                message: "Cliente deletado com sucesso"
            })
        }
        catch(e){
            console.log(e);
        }
    }
    static atualizarCliente = async(req, res, next)=>{
        try{
            const atributosObj = Object.keys(req.body);
            const valores = Object.values(req.body);
            let query = "UPDATE res_cliente SET "
            valores.push(req.params.id)
            
            atributosObj.forEach((atributo, i) => {
                atributosObj.length - 1 === i ? query += `${atributo} = $${i + 1}` : query += `${atributo} = $${i + 1}, `
            })

            query += ` WHERE cd_cliente = $${atributosObj.length + 1}`
        
            await client.query(query, valores);

            res.status(200).send({
                message: "Cliente atualizado com sucesso",
            })
        }
        catch(e){
            console.log(e);
        }
    }
    
}
