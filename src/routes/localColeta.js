import { Router } from 'express';
import { GetAllLocalColetaController } from '../controller/localcoleta/GetAllLocalColetaController.js';
import { GetByIdLocalColetaController } from '../controller/localcoleta/GetByIdLocalColetaConstroller.js';
import { CreateLocalColetaController } from '../controller/localcoleta/CreateLocalColetaController.js';
import { UpdateLocalColetaController } from '../controller/localcoleta/UpdateLocalColetaController.js';
import { DeleteLocalColetaController } from '../controller/localcoleta/DeleteLocalColetaController.js';

// Instância do router
const localColetaRouter = Router();

// -- Definições das rotas

// Get All
const getAllLocalColetaController = new GetAllLocalColetaController();

localColetaRouter.get('/locais-coleta', getAllLocalColetaController.handle);

// Get by id
const getByIdLocalColetaController = new GetByIdLocalColetaController();

localColetaRouter.get('/locais-coleta/:id', getByIdLocalColetaController.handle);

// Create
const createLocalColetaController = new CreateLocalColetaController();

localColetaRouter.post('/locais-coleta', createLocalColetaController.handle);

// Update
// PUT -> Todos os dados do recurso são atualizados.
//PATCH -> Atualizando parte do recurso.
const updateLocalColetaController = new UpdateLocalColetaController();

localColetaRouter.patch('/locais-coleta', updateLocalColetaController.handle);
// Delete
const deleteLocalColetaController = new DeleteLocalColetaController();

localColetaRouter.delete('/locais-coleta/:id', deleteLocalColetaController.handle);

export { localColetaRouter };
