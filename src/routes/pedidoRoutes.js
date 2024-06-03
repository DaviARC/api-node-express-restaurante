import express from "express";
import PedidoController from "../controllers/PedidoController.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const router = express.Router();

router
.get('/pedidos', verifyJWT, PedidoController.listarPedidosPorIdCliente)
.get('/pedidos/:id', PedidoController.listarPedidosPorIdPedido)
.post('/pedidos',verifyJWT, PedidoController.criarPedido)
.delete('/pedidos/:id', PedidoController.apagarPedido);

export default router;