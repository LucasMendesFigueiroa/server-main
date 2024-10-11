import { prisma } from '../../database/client.js';

export class CreateEstadoController {
  async handle(resquest, response) {
    const { nome, sigla } = resquest.body;
    if (nome == '' || !nome) {
      return response.status(400).json({ message: 'invalid params' });
    }
    const estado = await prisma.estado
      .create({
        data: {
          nome,
          sigla,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(estado);
  }
}
