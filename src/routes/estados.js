import { Router } from 'express';
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';
import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoConstroller.js';
import { CreateEstadoController } from '../controller/estados/CreateEstadoController.js';
import { UpdateEstadoController } from '../controller/estados/UpdateEstadoController.js';
import { DeleteEstadoController } from '../controller/estados/DeleteEstadoController.js';

// Instância do router
const estadoRouter = Router();

// -- Definições das rotas

// Get All
const getAllEstadoController = new GetAllEstadoController();

estadoRouter.get('/estados', getAllEstadoController.handle);

// Get by id
const getByIdEstadoController = new GetByIdEstadoController();

estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Create
const createEstadoController = new CreateEstadoController();

estadoRouter.post('/estados', createEstadoController.handle);

// Update
// PUT -> Todos os dados do recurso são atualizados.
//PATCH -> Atualizando parte do recurso.
const updateEstadoController = new UpdateEstadoController();

estadoRouter.patch('/estados', updateEstadoController.handle);
// Delete
const deleteEstadoController = new DeleteEstadoController();

estadoRouter.delete('/estados/:id', deleteEstadoController.handle);

export { estadoRouter };
