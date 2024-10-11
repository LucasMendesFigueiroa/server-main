import { prisma } from '../../database/client.js';

export class CreateDoacaoController {
  async handle(resquest, response) {
    const { pessoaId, localId, date } = resquest.body;
    if (pessoaId === '' || !pessoaId || !localId || localId === '' || date === '' || !date) {
      return response.status(400).json({ message: 'invalid params' });
    }
    // await prisma.pessoa
    //   .findFirst({
    //     where: {
    //       id: parseInt(pessoaId),
    //     },
    //   })
    //   .catch((error) => {
    //     response.status(400).json({ message: 'invalid pessoaId', error: error });
    //   });
    // await prisma.localColeta
    //   .findFirst({
    //     where: {
    //       id: parseInt(localId),
    //     },
    //   })
    //   .catch((error) => {
    //     response.status(400).json({ message: 'invalid localId', error: error });
    //   });

    const doacao = await prisma.doacoes
      .create({
        data: {
          data: date,
          pessoaId: pessoaId,
          localId: localId,
        },
      })
      .catch((error) => {
        Console.log(pessoaId, localId, date);
        response
          .status(400)
          .json({ message: `invalid request \n ${(pessoaId, localId, data)} `, error: error });
      });
    return response.status(201).json(doacao);
  }
}
