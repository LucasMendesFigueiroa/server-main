import { prisma } from '../../database/client.js';

export class GetAllPessoaController {
  async handle(resquest, response) {
    const pessoa = await prisma.pessoa.findMany();

    return response.json(pessoa);
  }
}
