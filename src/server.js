import express, { response } from 'express';
// Import Routes
import { routes } from './routes/routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import cors from 'cors';
const server = express();

//const swaggerDocs = require('./swagger');

const PORT = process.env.PORT || 5000;
// //const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swaggerConfig');
//swaggerDocs(server);

//const swaggerUi = require('swagger-ui-express');
//const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Versão do OpenAPI
    info: {
      title: 'API de Doação de Sangue',
      version: '1.0.0',
      description: 'Documentação da API de Doação de Sangue',
    },
    servers: [
      {
        url: 'http://localhost:5000', // URL do servidor
      },
    ],
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos que contêm as anotações do Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
// Routes

server.get('/', (resquest, response) => {
  response.json({
    message: ' Status: Server is running.',
  });
});
server.use(cors());
server.use(express.json());
server.use(routes);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Start - listen

server.listen(PORT, () => {
  console.log(`[SERVER] Server is runing on port ${PORT}.`);
});
