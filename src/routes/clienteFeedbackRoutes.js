import { Router } from "express";
import FeedbackController from "../controllers/FeedbackController.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const router = Router();

router
.post('/clientes/avaliarItem', verifyJWT, FeedbackController.criarAvaliarItem)
.post('/clientes/avaliarRestaurante', verifyJWT, FeedbackController.criarAvaliarRestaurante)
.post('/clientes/favoritarRestaurante', verifyJWT, FeedbackController.criarFavoritarRestaurante)
.put('/clientes/avaliarItem', verifyJWT, FeedbackController.atualizarAvaliarItem)
.put('/clientes/avaliarRestaurante', verifyJWT, FeedbackController.atualizarAvaliarRestaurante)
.delete('/clientes/favoritarRestaurante', verifyJWT, FeedbackController.apagarFavoritarRestaurante)

export default router;
