import { prisma } from '../../database/client.js';

export class CreateTipoSanguineoController {
  async handle(resquest, response) {
    const { tipo, fator } = resquest.body;
    if (tipo == '' || !tipo || fator == '' || !fator) {
      return response.status(400).json({ message: 'invalid params' });
    }
    const tipoSanguineo = await prisma.tipoSanguineo
      .create({
        data: {
          tipo,
          fator,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(tipoSanguineo);
  }
}
