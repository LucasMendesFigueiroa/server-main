import { Router } from 'express';

import { CreateTipoSanguineoController } from '../controller/tiposanquineo/CreateTipoSanguineoController.js';
import { DeleteTipoSanguineoController } from '../controller/tiposanquineo/DeleteTipoSanguineoController.js';
import { GetAllTipoSanguineoController } from '../controller/tiposanquineo/GetAllTipoSanguineoController.js';
import { GetByIdTipoSanguineoController } from '../controller/tiposanquineo/GetByIdTipoSanguineoConstroller.js';
import { UpdateTipoSanguineoController } from '../controller/tiposanquineo/UpdateTipoSanguineoController.js';

const tipoSanguineoRouter = Router();
const name = 'tipo-sanguineos';
// -- Definições das rotas

// Get All
const getAllTipoSanguineoController = new GetAllTipoSanguineoController();

tipoSanguineoRouter.get(`/${name}`, getAllTipoSanguineoController.handle);

// Get by id
const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController();

tipoSanguineoRouter.get(`/${name}/:id`, getByIdTipoSanguineoController.handle);

// Create
const createTipoSanguineoController = new CreateTipoSanguineoController();

tipoSanguineoRouter.post(`/${name}`, createTipoSanguineoController.handle);

// Update
// PUT -> Todos os dados do recurso são atualizados.
//PATCH -> Atualizando parte do recurso.
const updateTipoSanguineoController = new UpdateTipoSanguineoController();

tipoSanguineoRouter.patch(`/${name}`, updateTipoSanguineoController.handle);
// Delete
const deleteTipoSanguineoController = new DeleteTipoSanguineoController();

tipoSanguineoRouter.delete(`/${name}/:id`, deleteTipoSanguineoController.handle);

export { tipoSanguineoRouter };
