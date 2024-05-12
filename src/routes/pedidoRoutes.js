import express from "express";
import PedidoController from "../controllers/PedidoController.js";

const router = express.Router();

router
.get('/pedido/:id', PedidoController.listarPedidosPorIdCliente)
.post('/pedido', PedidoController.criarPedido)
.delete('/pedido/:id', PedidoController.apagarPedido);

export default router;