import { prisma } from '../../database/client.js';

export class DeleteLocalColetaController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    if (!id || id === '') {
      return response.status(400).json({ message: 'invalid params' });
    }
    const localColeta = await prisma.localColeta
      .delete({
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
