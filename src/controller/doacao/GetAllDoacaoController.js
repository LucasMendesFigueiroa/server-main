import { prisma } from '../../database/client.js';

export class GetAllDoacaoController {
  async handle(resquest, response) {
    const doacao = await prisma.doacao.findMany();

    return response.json(doacao);
  }
}
