import express from 'express';
import ClienteController from "../controllers/ClienteController.js";

const router = express.Router();

router
.get('/clientes', ClienteController.listarClientes)
.get('/cliente/:id', ClienteController.listarClientePorId)
.post('/cliente', ClienteController.criarCliente)
.put('/cliente/:id', ClienteController.atualizarCliente)
.delete('/cliente/:id', ClienteController.apagarCliente);

export default router;