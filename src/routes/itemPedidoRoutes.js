import express from "express";
import ItemPedidoController from "../controllers/ItemPedidoController.js";

const router = express.Router();

router
.get('/itemPedido/:id', ItemPedidoController.listarItemPedidoPorId)
.post('/itemPedido', ItemPedidoController.criarItemPedido)
.put('/itemPedido/:quantidade', ItemPedidoController.atualizarQuantidade)
.delete('/itemPedido/:id', ItemPedidoController.apagarItemPedido);

export default router;