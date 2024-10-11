import { Router } from 'express';
import { GetAllPessoaController } from '../controller/pessoa/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoa/GetByIdPessoaConstroller.js';
import { CreatePessoaController } from '../controller/pessoa/CreatePessoaController.js';
import { UpdatePessoaController } from '../controller/pessoa/UpdatePessoaController.js';
import { DeletePessoaController } from '../controller/pessoa/DeletePessoaController.js';

const pessoaRouter = Router();
const name = 'pessoas';
// -- Definições das rotas

// Get All
const getAllPessoaController = new GetAllPessoaController();

pessoaRouter.get(`/${name}`, getAllPessoaController.handle);

// Get by id
const getByIdPessoaController = new GetByIdPessoaController();

pessoaRouter.get(`/${name}/:id`, getByIdPessoaController.handle);

// Create
const createPessoaController = new CreatePessoaController();

pessoaRouter.post(`/${name}`, createPessoaController.handle);

// Update
// PUT -> Todos os dados do recurso são atualizados.
//PATCH -> Atualizando parte do recurso.
const updatePessoaController = new UpdatePessoaController();

pessoaRouter.patch(`/${name}`, updatePessoaController.handle);
// Delete
const deletePessoaController = new DeletePessoaController();

pessoaRouter.delete(`/${name}/:id`, deletePessoaController.handle);

export { pessoaRouter };
