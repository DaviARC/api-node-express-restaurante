import express from "express";
import restauranteController from "../controllers/restauranteController.js";
import upload from '../middlewares/upload.js';

const router = express.Router();

router
.get('/restaurantes', restauranteController.listarRestaurantes)
.get('/restaurante/:id', restauranteController.listarRestaurantePorId)
.post('/restaurante', restauranteController.criarRestaurante)
.put('/restaurante/:id', upload, restauranteController.atualizarRestaurante)
.delete('/restaurante:id', restauranteController.apagarRestaurante)

export default router;