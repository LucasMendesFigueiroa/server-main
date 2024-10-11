import { prisma } from '../../database/client.js';

export class UpdatePessoaController {
  async handle(resquest, response) {
    const { id, nome, rua, numero, complemento, rg, cidadeId, tipoId } = resquest.body;
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
      .update({
        data: {
          nome,
          rua,
          numero,
          complemento,
          rg,
          cidadeId,
          tipoId,
        },
        where: {
          id,
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.status(201).json(pessoa);
  }
}
