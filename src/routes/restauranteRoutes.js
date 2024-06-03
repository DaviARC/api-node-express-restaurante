import express from "express";
import restauranteController from "../controllers/restauranteController.js";
import upload from '../middlewares/upload.js';

const router = express.Router();

router
.get('/restaurantes', restauranteController.listarRestaurantes)
.get('/restaurantes/:id', restauranteController.listarRestaurantePorId)
.post('/restaurantes', restauranteController.criarRestaurante)
.put('/restaurantes/:id', upload, restauranteController.atualizarRestaurante)
.delete('/restaurantes:id', restauranteController.apagarRestaurante)

export default router;