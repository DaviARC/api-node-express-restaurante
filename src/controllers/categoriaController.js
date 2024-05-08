import client from "../config/dbConnect.js";
import Categoria from "../models/Categoria.js"

export default class CategoriaController{
    static criarCategoria = async(req, res, next)=>{
        try{
            const categoria = new Categoria(req.body);

            const response = await client.query("INSERT INTO res_categoria(cd_categoria, nm_categoria, des_categoria) VALUES ($1,$2,$3)", [categoria.cd_categoria, categoria.nm_categoria, categoria.des_categoria]);

            res.status(200).send({message: "Restaurante cadastrado"});
        }
        catch(e){
            console.log(e);
        }
    }
    static listarCategorias = async(req, res, next)=>{
        try{
           const response = await client.query("SELECT * FROM res_categoria");

           res.status(200).send(response.rows)
        }
        catch(e){
            console.log(e);
        }
    }
    static listarCategoriaPorId = async(req, res, next)=>{
        try{
            const id = req.params.id;

            const response = await client.query("SELECT * FROM res_categoria WHERE cd_categoria = $1", [id]);

            res.status(200).send(response.rows);
        }   
        catch(e){
            console.log(e);
        }       
    }
    static apagarCategoria = async(req, res, next)=>{
        try{
            const id = req.params.id;

            client.query("DELETE FROM res_categoria WHERE cd_categoria = $1", [id]);

            res.status(200).send({
                message: "categoria deletada com sucesso"
            })
        }
        catch(e){
            console.log(e);
        }
    }
    static atualizarCategoria = async(req, res, next)=>{
        try{
            const atributosObj = Object.keys(req.body);
            const valores = Object.values(req.body);
            let query = "UPDATE res_categoria SET "
            valores.push(req.params.id)
            
            atributosObj.forEach((atributo, i) => {
                atributosObj.length - 1 === i ? query += `${atributo} = $${i + 1}` : query += `${atributo} = $${i + 1}, `
            })

            query += ` WHERE cd_categoria = $${atributosObj.length + 1}`
        
            await client.query(query, valores);

            res.status(200).send({
                message: "Categoria atualizado com sucesso",
            })
        }
        catch(e){
            console.log(e);
        }
    }
    
}
