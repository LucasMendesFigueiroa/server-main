import { prisma } from '../../database/client.js';

export class GetByIdDoacaoController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    const doacao = await prisma.doacao
      .findFirstOrThrow({
        where: {
          id: parseInt(id),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.json(doacao);
  }
}
