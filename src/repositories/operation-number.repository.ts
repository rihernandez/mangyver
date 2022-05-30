/* eslint-disable */
import { getRepository } from "typeorm";
import { OperationNumber, Operation } from "../models";

export interface IOperationNumberPayload {
  name: string;
  operation: Operation;
  isActive: boolean;
}

export const getOperationNumbers = async (
  operation?: string
): Promise<Array<OperationNumber>> => {
  const repository = getRepository(OperationNumber);
  return repository.find({
    where: { operation: operation, isActive: true },
    order: { name: "ASC" },
  });
};

export const createOperationNumber = async (
  payload: IOperationNumberPayload
): Promise<OperationNumber> => {
  const repository = getRepository(OperationNumber);
  const operationNumber = new OperationNumber();
  return repository.save({
    ...operationNumber,
    ...payload,
  });
};

export const getOperationNumber = async (
  id: string
): Promise<OperationNumber | null> => {
  const repository = getRepository(OperationNumber);
  const operationNumber = await repository.findOne({ id: id });
  if (!operationNumber) return null;
  return operationNumber;
};
/* eslint-disable */
