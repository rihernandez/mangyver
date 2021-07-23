import { getRepository } from "typeorm";
import { Bus, Operation } from "../models";

export interface IOperationPayload {
  name: string;
  bus: Bus
  code: string;
  password: string;
  email: string;
  isActive: boolean;
}

export const getOperations = async (): Promise<Array<Operation>> => {
  const operationRepository = getRepository(Operation);
  return operationRepository.find();
};

export const createOperation = async (payload: IOperationPayload): Promise<Operation> => {
  const operationRepository = getRepository(Operation);
  const operation = new Operation();
  return operationRepository.save({
    ...operation,
    ...payload,
  });
};

export const getOperation = async (id: number): Promise<Operation | null> => {
  const operationRepository = getRepository(Operation);
  const operation = await operationRepository.findOne({ id: id });
  if (!operation) return null;
  return operation;
};
