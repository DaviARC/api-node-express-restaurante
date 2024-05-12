import express from 'express';
import client from '../config/dbConnect.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post("/login", async(req,res)=>{
    let login = {
        user: req.body.user,
        password: req.body.password
    }
    const response = await client.query('SELECT * FROM res_cliente WHERE log_cliente = $1 and sen_cliente = $2', [login.user, login.password])
    if(response.rowCount !== 0){
        const token = jwt.sign({userId: response.rows[0].cd_cliente}, `${process.env.SECRET}`,
        {expiresIn: 600})
        return res.json({auth:true, token})
    }
    res.status(401).send({message: "Usuário não autorizado"}).end();        
})
