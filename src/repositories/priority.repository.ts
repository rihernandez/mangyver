/* eslint-disable */
import { getRepository } from "typeorm";
import { Priority, Operation } from "../models";

export interface IPriorityPayload {
  name: string;
  SAPCode: string;
  operation: Operation;
  isActive: boolean;
}

export const getPrioritys = async (operation?: string): Promise<Array<Priority>> => {
  const repository = getRepository(Priority);
  return repository.find({ where: { operationId: operation } });
};

export const createPriority = async (
  payload: IPriorityPayload
): Promise<Priority> => {
  const repository = getRepository(Priority);
  const priority = new Priority();
  return repository.save({
    ...priority,
    ...payload,
  });
};

export const getPriority = async (id: string): Promise<Priority | null> => {
  const repository = getRepository(Priority);
  const priority = await repository.findOne({ id: id });
  if (!priority) return null;
  return priority;
};
/* eslint-disable */
