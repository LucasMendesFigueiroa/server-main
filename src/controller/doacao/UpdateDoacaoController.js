import { prisma } from '../../database/client.js';

export class UpdateDoacaoController {
  async handle(resquest, response) {
    const { id, pessoaId, localId, data } = resquest.body;
    if (
      pessoaId === '' ||
      !pessoaId ||
      !localId ||
      localId === '' ||
      data === '' ||
      !data ||
      !id ||
      id === ''
    ) {
      return response.status(400).json({ message: 'invalid params' });
    }
    const doacao = await prisma.doacao
      .update({
        data: {
          pessoaId,
          localId,
          data,
        },
        where: {
          id,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(doacao);
  }
}
