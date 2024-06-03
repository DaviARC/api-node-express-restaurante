import express from "express";
import PedidoController from "../controllers/PedidoController.js";
import ItemPedidoController from "../controllers/ItemPedidoController.js"
import verifyJWT from "../middlewares/verifyJWT.js";

const router = express.Router();

router
.get('/pedidos', verifyJWT, PedidoController.listarPedidosPorIdCliente)
.get('/pedidos/:id', PedidoController.listarPedidosPorIdPedido)
.post('/pedidos',verifyJWT, PedidoController.criarPedido)
.delete('/pedidos/:id', PedidoController.apagarPedido)
.get('/pedidos/itemPedidos/:id', ItemPedidoController.listarItemPedidoPorId)
.post('/pedidos/itemPedidos', ItemPedidoController.criarItemPedido)
.put('/pedidos/itemPedidos/:quantidade', ItemPedidoController.atualizarQuantidade)
.delete('/pedidos/itemPedidos/:id', ItemPedidoController.apagarItemPedido);

export default router;