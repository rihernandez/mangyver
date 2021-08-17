import { getRepository } from "typeorm";
import { Process, ProcessType } from "../models";

export interface IProcessPayload {
  processTypeId: ProcessType;
  name: string;
  SAPCode: string;
  isActive: boolean;

}

export const getProcesss = async (): Promise<Array<Process>> => {
  const repository = getRepository(Process);
  return repository.find();
};

export const createProcess = async (payload: IProcessPayload): Promise<Process> => {
  const repository = getRepository(Process);
  const process = new Process();
  return repository.save({
    ...process,
    ...payload,
  });
};

export const getProcess = async (id: number): Promise<Process | null> => {
  const repository = getRepository(Process);
  const process = await repository.findOne({ processId: id });
  if (!process) return null;
  return process;
};