import { prisma } from '../../database/client.js';

export class GetByIdPessoaController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    const pessoa = await prisma.pessoa
      .findFirstOrThrow({
        where: {
          id: parseInt(id),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.json(pessoa);
  }
}
