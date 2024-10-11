import { prisma } from '../../database/client.js';

export class GetByIdCidadeController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    const estado = await prisma.cidade
      .findFirstOrThrow({
        where: {
          id: parseInt(id),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.json(estado);
  }
}
