import client from "../config/dbConnect.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import Item from "../models/Item.js"
import fs from 'fs';

export default class ItemController{
    static criarItem = async(req, res, next)=>{
        try{
            const item = new Item(req.body);

            const response = await client.query("INSERT INTO res_item(cd_item, cd_categoria, cd_restaurante, nm_item, pre_item, des_item) VALUES ($1,$2,$3,$4,$5,$6)", [item.cd_item, item.cd_categoria, item.cd_restaurante, item.nm_item, item.pre_item, item.des_item]);

            res.status(200).send({message: "Item cadastrado"});
        }
        catch(e){
            console.log(e);
        }
    }
    static listarItens = async(req, res, next)=>{
        try{
           const response = await client.query("SELECT * FROM res_item");

           res.status(200).send(response.rows)
        }
        catch(e){
            console.log(e);
        }
    }
    static listarItemPorId = async(req, res, next)=>{
        try{
            const id = req.params.id;

            const response = await client.query("SELECT * FROM res_item WHERE cd_item = $1", [id]);

            if(response.rowCount !== 0){
                res.status(200).send(response.rows);
            }else
            {
                next(new NaoEncontrado("O id do item não localizado."))
            }
        }   
        catch(e){
            console.log(e);
        }       
    }
    static apagarItem = async(req, res, next)=>{
        try{
            const id = req.params.id;

            const response = await client.query("DELETE FROM res_item WHERE cd_item = $1", [id]);

            if(response.rowCount !== 0){
                res.status(200).send({
                    message: "Item deletado com sucesso"
                })
            }else
            {
                next(new NaoEncontrado("O id do item não localizado."))
            }
        }
        catch(e){
            console.log(e);
        }
    }
    static atualizarItem = async(req, res, next)=>{
        try{
            const atributosObj = Object.keys(req.body);
            const valores = Object.values(req.body);
            let query = "UPDATE res_item SET "
            if(req.caminho !== undefined && req.path !== undefined){
                const imageBuffer = fs.readFileSync(`${req.caminho}\\${req.nomeImagem}`);
                const base64Image = Buffer.from(imageBuffer).toString('base64');
                atributosObj.push('img_item');
                valores.push(base64Image);   
            }

            valores.push(req.params.id)
            
            atributosObj.forEach((atributo, i) => {
                atributosObj.length - 1 === i ? query += `${atributo} = $${i + 1}` : query += `${atributo} = $${i + 1}, `
            })

            query += ` WHERE cd_item = $${atributosObj.length + 1}`
        
            await client.query(query, valores);

            res.status(200).send({
                message: "Item atualizado com sucesso",
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