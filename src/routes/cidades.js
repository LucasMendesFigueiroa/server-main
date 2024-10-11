import { Router } from 'express';
import { GetAllCidadeController } from '../controller/cidades/GetAllCidadeController.js';
import { GetByIdCidadeController } from '../controller/cidades/GetByIdCidadeConstroller.js';
import { CreateCidadeController } from '../controller/cidades/CreateCidadeController.js';
import { UpdateCidadeController } from '../controller/cidades/UpdateCidadeController.js';
import { DeleteCidadeController } from '../controller/cidades/DeleteCidadeController.js';

// Instância do router
const cidadeRouter = Router();
const name = 'cidades';
// -- Definições das rotas

// Get All
const getAllCidadeController = new GetAllCidadeController();
cidadeRouter.get(`/${name}`, getAllCidadeController.handle);
/**
 * @swagger
 * /cidades:
 *   get:
 *     summary: Get all cidades
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

// Get by id
const getByIdCidadeController = new GetByIdCidadeController();

cidadeRouter.get(`/${name}/:id`, getByIdCidadeController.handle);
/**
 * @swagger
 * /cidades/{id}:
 *   get:
 *     summary: Get cidade by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cidade
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

// Create
const createCidadeController = new CreateCidadeController();

cidadeRouter.post(`/${name}`, createCidadeController.handle);
/**
 * @swagger
 * /cidades:
 *   post:
 *     summary: Create a new cidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cidade'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

// Update
// PUT -> Todos os dados do recurso são atualizados.
//PATCH -> Atualizando parte do recurso.
const updateCidadeController = new UpdateCidadeController();

cidadeRouter.patch(`/${name}`, updateCidadeController.handle);
/**
 * @swagger
 * /cidades:
 *   patch:
 *     summary: Update a cidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cidade'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

// Delete
const deleteCidadeController = new DeleteCidadeController();

cidadeRouter.delete(`/${name}/:id`, deleteCidadeController.handle);
/**
 * @swagger
 * /cidades/{id}:
 *   delete:
 *     summary: Delete cidade by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cidade
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

export { cidadeRouter };
