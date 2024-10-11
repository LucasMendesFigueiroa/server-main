import { prisma } from '../../database/client.js';

export class UpdateCidadeController {
  async handle(resquest, response) {
    const { id, nome, estado_id } = resquest.body;
    if (nome == '' || !nome || !id || id === '') {
      return response.status(400).json({ message: 'invalid params' });
    }
    const cidade = await prisma.cidade
      .update({
        data: {
          nome,
          estado_id,
        },
        where: {
          id,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(cidade);
  }
}
