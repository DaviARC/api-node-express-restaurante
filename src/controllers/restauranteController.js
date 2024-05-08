import client from "../config/dbConnect.js"
import Restaurante from "../models/restaurante.js"


export default class restauranteController{
    static criarRestaurante = async(req, res, next)=>{
        try{
            const restaurante = new Restaurante(req.body);

            await client.query("INSERT INTO res_restaurante(cd_restaurante, nm_restaurante, cnpj_restaurante) VALUES ($1,$2,$3)", [restaurante.cd_restaurante, restaurante.nom_restaurante, restaurante.cnpj_restaurante]);

            res.status(200).send({message: "Restaurante cadastrado"});
        }
        catch(e){
            console.log(e);
        }
    }
    static listarRestaurantes = async(req, res, next)=>{
        try{
            const response = await client.query("SELECT * FROM res_restaurante");

            res.status(200).send(response.rows);
        }   
        catch(e){
            console.log(e);
        }       
    }
    static listarRestaurantePorId = async(req, res, next)=>{
        try{
            const id = req.params.id;

            const response = await client.query("SELECT * FROM res_restaurante WHERE cd_restaurante = $1", [id]);

            res.status(200).send(response.rows);
        }   
        catch(e){
            console.log(e);
        }       
    }
    static apagarRestaurante = async(req, res, next)=>{
        try{
            const id = req.params.id;

            client.query("DELETE FROM res_restaurante WHERE cd_restaurante = $1", [id]);

            res.status(200).send({
                message: "Restaurante deletado com sucesso"
            })
        }
        catch(e){
            console.log(e);
        }
    }
    static atualizarRestaurante = async(req, res, next)=>{
        try{
            const atributosObj = Object.keys(req.body);
            const valores = Object.values(req.body);
            let query = "UPDATE res_restaurante SET "
            valores.push(req.params.id)
            
            atributosObj.forEach((atributo, i) => {
                atributosObj.length - 1 === i ? query += `${atributo} = $${i + 1}` : query += `${atributo} = $${i + 1}, `
            })

            query += ` WHERE cd_restaurante = $${atributosObj.length + 1}`
        
            await client.query(query, valores);

            res.status(200).send({
                message: "Restaurante atualizado com sucesso",
            })
        }
        catch(e){
            console.log(e);
        }
    }
}