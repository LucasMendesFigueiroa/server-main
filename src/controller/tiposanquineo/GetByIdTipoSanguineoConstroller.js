import { prisma } from '../../database/client.js';

export class GetByIdTipoSanguineoController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    const tipoSanguineo = await prisma.tipoSanguineo
      .findFirstOrThrow({
        where: {
          id: parseInt(id),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.json(tipoSanguineo);
  }
}
