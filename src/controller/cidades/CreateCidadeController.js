import { prisma } from '../../database/client.js';

export class CreateCidadeController {
  async handle(resquest, response) {
    const { nome, estado_id } = resquest.body;
    if (nome === '' || !nome || !estado_id || nome === '') {
      return response.status(400).json({ message: 'invalid params' });
    }
    await prisma.estado
      .findFirst({
        where: {
          id: parseInt(estado_id),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid estado_id', error: error });
      });

    const cidade = await prisma.cidade
      .create({
        data: {
          nome,
          estado: {
            connect: {
              id: estado_id,
            },
          },
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });
    return response.status(201).json(cidade);
  }
}
