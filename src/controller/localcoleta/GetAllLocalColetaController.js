import { prisma } from '../../database/client.js';

export class GetAllLocalColetaController {
  async handle(resquest, response) {
    const localColeta = await prisma.localColeta.findMany();

    return response.json(localColeta);
  }
}
