import { prisma } from '../../database/client.js';

export class UpdateTipoSanguineoController {
  async handle(resquest, response) {
    const { id, tipo, fator } = resquest.body;
    if (tipo == '' || !tipo || fator == '' || !fator || id == '' || !id) {
      return response.status(400).json({ message: 'invalid params' });
    }
    const tipoSanguineo = await prisma.tipoSanguineo
      .update({
        data: {
          tipo,
          fator,
        },
        where: {
          id,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(tipoSanguineo);
  }
}
