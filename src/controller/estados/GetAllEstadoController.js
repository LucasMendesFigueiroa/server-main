import { prisma } from '../../database/client.js';

export class GetAllEstadoController {
  async handle(resquest, response) {
    const estados = await prisma.estado.findMany();

    return response.json(estados);
  }
}
