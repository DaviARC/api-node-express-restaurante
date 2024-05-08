import express from "express";
import categoriaController from "../controllers/categoriaController.js";

const router = express.Router();

router
.get('/categorias', categoriaController.listarCategorias)
.get('/categoria/:id', categoriaController.listarCategoriaPorId)
.post('/categoria', categoriaController.criarCategoria)
.put('/categoria/:id', categoriaController.atualizarCategoria)
.delete('/categoria/:id', categoriaController.apagarCategoria);


export default router;