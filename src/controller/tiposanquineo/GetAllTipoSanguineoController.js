import { prisma } from '../../database/client.js';

export class GetAllTipoSanguineoController {
  async handle(resquest, response) {
    const tipoSanguineo = await prisma.tipoSanguineo.findMany();

    return response.json(tipoSanguineo);
  }
}
