import { prisma } from '../../database/client.js';

export class GetAllCidadeController {
  async handle(resquest, response) {
    const cidade = await prisma.cidade.findMany();

    return response.json(cidade);
  }
}
