import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacao/CreateDoacaoController.js';
import { GetAllDoacaoController } from '../controller/doacao/GetAllDoacaoController.js';
import { GetByIdDoacaoController } from '../controller/doacao/GetByIdDoacaoConstroller.js';
import { UpdateDoacaoController } from '../controller/doacao/UpdateDoacaoController.js';
import { DeleteDoacaoController } from '../controller/doacao/DeleteDoacaoController.js';

// Instância do router
const doacaoRouter = Router();
const name = 'doacoes';
// -- Definições das rotas

// Get All
const getAllCidadeController = new CreateDoacaoController();

doacaoRouter.get(`/${name}`, getAllCidadeController.handle);

// Get by id
const getByIdCidadeController = new GetAllDoacaoController();

doacaoRouter.get(`/${name}/:id`, getByIdCidadeController.handle);

// Create
const createCidadeController = new GetByIdDoacaoController();

doacaoRouter.post(`/${name}`, createCidadeController.handle);

// Update
// PUT -> Todos os dados do recurso são atualizados.
//PATCH -> Atualizando parte do recurso.
const updateCidadeController = new UpdateDoacaoController();

doacaoRouter.patch(`/${name}`, updateCidadeController.handle);
// Delete
const deleteCidadeController = new DeleteDoacaoController();

doacaoRouter.delete(`/${name}/:id`, deleteCidadeController.handle);

export { doacaoRouter };
