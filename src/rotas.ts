import express from 'express';
import {
  atualizarCarros,
  cadastrarCarros,
  detalharCarros,
  excluirCarros,
  listarCarros,
} from './controllers/carros';

const rotas = express();

rotas.get('/carros', listarCarros);
rotas.get('/carros/:id', detalharCarros);
rotas.post('/carros', cadastrarCarros);
rotas.put('/carros/:id', atualizarCarros);
rotas.delete('/carros/:id', excluirCarros);

export default rotas;
