import { prisma } from '../../database/client.js';

export class CreatePessoaController {
  async handle(resquest, response) {
    const { nome, rua, numero, complemento, rg, cidadeId, tipoId } = resquest.body;
    if (
      nome === '' ||
      !nome ||
      !cidadeId ||
      cidadeId === '' ||
      rua === '' ||
      !rua ||
      !numero ||
      numero === '' ||
      !rg ||
      rg === '' ||
      !tipoId ||
      tipoId === ''
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
    await prisma.tipoSanguineo
      .findFirst({
        where: {
          id: parseInt(tipoId),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid tipoId', error: error });
      });

    const pessoa = await prisma.pessoa
      .create({
        data: {
          nome,
          rua,
          numero,
          complemento,
          rg,
          cidade: {
            connect: {
              id: cidadeId,
            },
          },
          tipo: {
            connect: {
              id: tipoId,
            },
          },
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });
    return response.status(201).json(pessoa);
  }
}
