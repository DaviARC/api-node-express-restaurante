import express from 'express';
import client from '../config/dbConnect.js';
import Cliente from '../models/Cliente.js';
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post("/login", async(req,res)=>{
    let cliente;
    let login;
    let response;
    let keys = ''
    let values = []
    
    if(req.body.google_id){
        const { nm_cliente, log_cliente, google_id } = req.body;
        
        cliente = new Cliente({
        nm_cliente : nm_cliente,
        log_cliente : log_cliente,
        google_id: google_id })

        response = await client.query('SELECT * FROM res_cliente WHERE log_cliente = $1 and google_id = $2', [cliente.log_cliente, cliente.google_id])
        keys = 'log_cliente = $1 and google_id = $2'
        values.push(cliente.log_cliente);
        values.push(cliente.google_id);
        
        if(response.rowCount === 0){
            await client.query('INSERT INTO res_cliente(nm_cliente, log_cliente, google_id, cd_cliente) VALUES ($1, $2, $3, $4)', [cliente.nm_cliente, cliente.log_cliente, cliente.google_id, cliente.cd_cliente])
        }    
    } else {
        login = {
            user: req.body.user,
            password: req.body.password
        }
        keys = 'log_cliente = $1 and sen_cliente = $2'
        values.push(req.body.user);
        values.push(req.body.password);
    }
    
    response = await client.query(`SELECT * FROM res_cliente WHERE ${keys}`, values)
    if(response.rowCount !== 0){
        const token = jwt.sign({userId: response.rows[0].cd_cliente}, `${process.env.SECRET}`,
        {expiresIn: 3600})
        return res.json({auth:true, token})
    }
    res.status(401).send({message: "Usuário não autorizado"}).end();        
})

export default router