import express from "express";
import ItemController from "../controllers/ItemController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router
.get('/itens', ItemController.listarItens)
.get('/item/:id', ItemController.listarItemPorId)
.post('/item', ItemController.criarItem)
.put('/item/:id', upload, ItemController.atualizarItem)
.delete('/item/:id', ItemController.apagarItem)

export default router;