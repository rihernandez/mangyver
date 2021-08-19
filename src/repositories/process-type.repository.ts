import { getRepository } from "typeorm";
import { ProcessType } from "../models";

export interface IProcessTypePayload {
  name: string;
  isActive: boolean;
  
}

export const getProcessTypes = async (): Promise<Array<ProcessType>> => {
  const repository = getRepository(ProcessType);
  return repository.find();
};

export const createProcessType = async (payload: IProcessTypePayload): Promise<ProcessType> => {
  const repository = getRepository(ProcessType);
  const processType = new ProcessType();
  return repository.save({
    ...processType,
    ...payload,
  });
};

export const getProcessType = async (id: string): Promise<ProcessType | null> => {
  const repository = getRepository(ProcessType);
  const processType = await repository.findOne({ id: id });
  if (!processType) return null;
  return processType;
};