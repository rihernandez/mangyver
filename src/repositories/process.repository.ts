/* eslint-disable */
import { getRepository } from "typeorm";
import { Process, ProcessType, Operation } from "../models";

export interface IProcessPayload {
  processType: ProcessType;
  name: string;
  SAPCode: string;
  operation: Operation;
  isActive: boolean;
}

export const getProcesss = async (
  operationId?: string
): Promise<Array<Process>> => {
  const repository = getRepository(Process);
  return repository.find({ where: [{ operation: operationId }] });
};

export const createProcess = async (
  payload: IProcessPayload
): Promise<Process> => {
  const repository = getRepository(Process);
  const process = new Process();
  return repository.save({
    ...process,
    ...payload,
  });
};

export const getProcess = async (id: string): Promise<Process | null> => {
  const repository = getRepository(Process);
  const process = await repository.findOne({ processId: id });
  if (!process) return null;
  return process;
};
