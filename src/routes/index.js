import express from 'express';
import restaurante from './restauranteRoutes.js';
import categoria from './categoriaRoutes.js'

const routes = (app) =>{
    app.route("/").get((req, res)=>{
        res.status(200).send({titulo : "Administrador de pedidos"})
    })

    app.use(
        express.json(),
        restaurante,
        categoria
    )
}

export default routes;