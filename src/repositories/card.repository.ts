/* eslint-disable */
import { Operation } from "../models";
import { getRepository } from "typeorm";
import { Card } from "../models";

export interface ICardPayload {
  name: string;
  operation: Operation;
  isActive: boolean;
}

export const getCards = async (
  process?: string,
  operationId?: string
): Promise<Array<Card>> => {
  const repository = getRepository(Card);
  if (process) {
    return repository.find({ where: { process, isActive: true } });
  }

  return repository.find({
    where: [{ operation: operationId, isActive: true }],
    order: { name: "ASC" },
  });
};

export const createCard = async (payload: ICardPayload): Promise<Card> => {
  const repository = getRepository(Card);
  const card = new Card();
  return repository.save({
    ...card,
    ...payload,
  });
};

export const getCard = async (id: string): Promise<Card | null> => {
  const repository = getRepository(Card);
  const card = await repository.findOne({ id: id });
  if (!card) return null;
  return card;
};
/* eslint-disable */
