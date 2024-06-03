import express from 'express';
import ClienteController from "../controllers/ClienteController.js";

const router = express.Router();

router
.get('/clientes', ClienteController.listarClientes)
.get('/clientes/:id', ClienteController.listarClientePorId)
.post('/clientes', ClienteController.criarCliente)
.put('/clientes/:id', ClienteController.atualizarCliente)
.delete('/clientes/:id', ClienteController.apagarCliente);

export default router;
