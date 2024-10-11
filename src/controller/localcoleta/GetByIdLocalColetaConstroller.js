import { prisma } from '../../database/client.js';

export class GetByIdLocalColetaController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    const localColeta = await prisma.localColeta
      .findFirstOrThrow({
        where: {
          id: parseInt(id),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.json(localColeta);
  }
}
