import { cidadeRouter } from './cidades.js';
import { estadoRouter } from './estados.js';
import { localColetaRouter } from './localColeta.js';
import { doacaoRouter } from './doacao.js';
import { pessoaRouter } from './pessoas.js';
import { tipoSanguineoRouter } from './tuposSanguineos.js';

const routes = [
  estadoRouter,
  cidadeRouter,
  localColetaRouter,
  doacaoRouter,
  pessoaRouter,
  tipoSanguineoRouter,
];

export { routes };
