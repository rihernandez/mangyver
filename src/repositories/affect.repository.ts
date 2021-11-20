/* eslint-disable */
import { getRepository } from "typeorm";
import { Affect, Operation } from "../models";

export interface IAffectPayload {
  name: string;
  SAPCode: string;
  operation: Operation;
  isActive: boolean;
}

export const getAffects = async (): Promise<Array<Affect>> => {
  const repository = getRepository(Affect);
  return repository.find();
};

export const createAffect = async (
  payload: IAffectPayload
): Promise<Affect> => {
  const repository = getRepository(Affect);
  const affect = new Affect();
  return repository.save({
    ...affect,
    ...payload,
  });
};

export const getAffect = async (id: string): Promise<Affect | null> => {
  const repository = getRepository(Affect);
  const affect = await repository.findOne({ id: id });
  if (!affect) return null;
  return affect;
};
/* eslint-disable */
