import express from "express";
import ItemPedidoController from "../controllers/ItemPedidoController.js";

const router = express.Router();

router
.get('/itemPedidos/:id', ItemPedidoController.listarItemPedidoPorId)
.post('/itemPedidos', ItemPedidoController.criarItemPedido)
.put('/itemPedidos/:quantidade', ItemPedidoController.atualizarQuantidade)
.delete('/itemPedidos/:id', ItemPedidoController.apagarItemPedido);

export default router;