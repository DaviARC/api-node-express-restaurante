import express from 'express';
import item from './itemRoutes.js';
import restaurante from './restauranteRoutes.js';
import categoria from './categoriaRoutes.js'
import cliente from './clienteRoutes.js'
import pedido from './pedidoRoutes.js';
import itemPedido from './itemPedidoRoutes.js'
import login from './loginRoutes.js'


const routes = (app) =>{
    app.route("/").get((req, res)=>{
        res.status(200).send({titulo : "Administrador de pedidos"})
    })

    app.use(
        express.json(),
        restaurante,
        categoria,
        item,
        cliente,
        pedido,
        itemPedido,
        login
    )
}

export default routes;