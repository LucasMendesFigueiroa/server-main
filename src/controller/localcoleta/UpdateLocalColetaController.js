import { prisma } from '../../database/client.js';

export class UpdateLocalColetaController {
  async handle(resquest, response) {
    const { id, nome, rua, numero, complemento, cidadeId } = resquest.body;
    if (
      nome === '' ||
      !nome ||
      !cidadeId ||
      cidadeId === '' ||
      rua === '' ||
      !rua ||
      !numero ||
      numero === '' ||
      !complemento ||
      complemento === '' ||
      !id ||
      id === ''
    ) {
      return response.status(400).json({ message: 'invalid params' });
    }
    const localColeta = await prisma.localColeta
      .update({
        data: {
          nome,
          rua,
          numero,
          complemento,
          cidadeId,
        },
        where: {
          id,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(localColeta);
  }
}
