import express from "express";
import CategoriaController from "../controllers/CategoriaController.js";

const router = express.Router();

router
.get('/categorias', CategoriaController.listarCategorias)
.get('/categorias/:id', CategoriaController.listarCategoriaPorId)
.post('/categorias', CategoriaController.criarCategoria)
.put('/categorias/:id', CategoriaController.atualizarCategoria)
.delete('/categorias/:id', CategoriaController.apagarCategoria);


export default router;