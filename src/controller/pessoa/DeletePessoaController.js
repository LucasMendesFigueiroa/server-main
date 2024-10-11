import { prisma } from '../../database/client.js';

export class DeletePessoaController {
  async handle(resquest, response) {
    const { id } = resquest.params;
    if (!id || id === '') {
      return response.status(400).json({ message: 'invalid params' });
    }
    const pessoa = await prisma.pessoa
      .delete({
        where: {
          id: parseInt(id),
        },
      })
      .catch((error) => {
        response.status(400).json({ message: 'invalid request', error: error });
      });

    return response.json(pessoa);
  }
}
