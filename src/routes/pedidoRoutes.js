import express from "express";
import PedidoController from "../controllers/PedidoController.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const router = express.Router();

router
.get('/pedido', verifyJWT, PedidoController.listarPedidosPorIdCliente)
.get('/pedido/:id', PedidoController.listarPedidosPorIdPedido)
.post('/pedido',verifyJWT, PedidoController.criarPedido)
.delete('/pedido/:id', PedidoController.apagarPedido);

export default router;