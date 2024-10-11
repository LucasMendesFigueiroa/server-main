import { prisma } from '../../database/client.js';

export class DeleteCidadeController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    if (!id || id === '') {
      return response.status(400).json({ message: 'invalid params' });
    }
    const estado = await prisma.cidade
      .delete({
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
