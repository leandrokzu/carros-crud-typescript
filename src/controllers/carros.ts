import { Request, Response } from 'express';
import { knex } from '../database/conexao';
import { Carro } from '../tipos';

export const listarCarros = async (_: Request, res: Response) => {
  try {
    const carros = await knex('carros');
    return res.json(carros);
  } catch {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const detalharCarros = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const carro = await knex<Carro>('carros')
      .where({ id: Number(id) })
      .first();

    if (!carro) {
      return res.status(404).json({ mensagem: 'Carro não encontrado' });
    }
    return res.json(carro);
  } catch {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const cadastrarCarros = async (req: Request, res: Response) => {};

export const atualizarCarros = async (req: Request, res: Response) => {};

export const excluirCarros = async (req: Request, res: Response) => {};
