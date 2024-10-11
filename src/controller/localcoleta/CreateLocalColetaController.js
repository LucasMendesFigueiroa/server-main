import { prisma } from '../../database/client.js';

export class CreateLocalColetaController {
  async handle(resquest, response) {
    const { nome, rua, numero, complemento, cidadeId } = resquest.body;
    if (
      nome === '' ||
      !nome ||
      !cidadeId ||
      cidadeId === '' ||
      rua === '' ||
      !rua ||
      !numero ||
      numero === ''
    ) {
      return response.status(400).json({ message: 'invalid params' });
    }
    await prisma.cidade
      .findFirst({
        where: {
          id: parseInt(cidadeId),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid cidadeId', error: error });
      });

    const localColeta = await prisma.localColeta
      .create({
        data: {
          nome,
          rua,
          numero,
          complemento,
          cidade: {
            connect: {
              id: cidadeId,
            },
          },
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });
    return response.status(201).json(localColeta);
  }
}
