import { prisma } from '../../database/client.js';
export class UpdateEstadoController {
  async handle(resquest, response) {
    const { id, nome, sigla } = resquest.body;
    if (nome == '' || !nome || !id || id === '') {
      return response.status(400).json({ message: 'invalid params' });
    }
    const estado = await prisma.estado
      .update({
        data: {
          nome,
          sigla,
          update_at: new Date(),
        },
        where: {
          id,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(estado);
  }
}
