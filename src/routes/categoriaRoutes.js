import express from "express";
import categoriaController from "../controllers/CategoriaController.js";

const router = express.Router();

router
.get('/categorias', categoriaController.listarCategorias)
.get('/categorias/:id', categoriaController.listarCategoriaPorId)
.post('/categorias', categoriaController.criarCategoria)
.put('/categorias/:id', categoriaController.atualizarCategoria)
.delete('/categorias/:id', categoriaController.apagarCategoria);


export default router;