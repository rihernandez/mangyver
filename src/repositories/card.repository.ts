import { Operation } from '../models';
import { getRepository } from "typeorm";
import { Card } from "../models";

export interface ICardPayload {
  name: string;
  operation: Operation
  isActive: boolean;
}

export const getCards = async (): Promise<Array<Card>> => {
  const repository = getRepository(Card);
  return repository.find();
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
