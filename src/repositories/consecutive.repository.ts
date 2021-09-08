import { getRepository } from "typeorm";
import { Consecutive, Operation } from "../models";

export interface IConsecutivePayload {
  name: string;
  SAPCode: string;
  operation: Operation
  isActive: boolean;
}

export const getConsecutives = async (): Promise<Array<Consecutive>> => {
  const repository = getRepository(Consecutive);
  return repository.find();
};

export const createConsecutive = async (payload: IConsecutivePayload): Promise<Consecutive> => {
  const repository = getRepository(Consecutive);
  const consecutive = new Consecutive();
  return repository.save({
    ...consecutive,
    ...payload,
  });
};

export const getConsecutive = async (id: string): Promise<Consecutive | null> => {
  const repository = getRepository(Consecutive);
  const consecutive = await repository.findOne({ id: id });
  if (!consecutive) return null;
  return consecutive;
};
