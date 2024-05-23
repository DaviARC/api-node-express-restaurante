import express from "express";
import ItemController from "../controllers/ItemController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router
.get('/itens', ItemController.listarItens)
.get('/itens/:id', ItemController.listarItemPorId)
.post('/itens', ItemController.criarItem)
.put('/itens/:id', upload, ItemController.atualizarItem)
.delete('/itens/:id', ItemController.apagarItem)

export default router;