/* eslint-disable */
import { getRepository } from "typeorm";
import { Deviation, Operation } from "../models";

export interface IDeviationPayload {
  name: string;
  operation: Operation;
  isActive: boolean;
}

export const getDeviations = async (
  operation?: string
): Promise<Array<Deviation>> => {
  const repository = getRepository(Deviation);
  return repository.find({ where: { operation }, order: { name: "ASC" } });
};

export const createDeviation = async (
  payload: IDeviationPayload
): Promise<Deviation> => {
  const repository = getRepository(Deviation);
  const deviation = new Deviation();
  return repository.save({
    ...deviation,
    ...payload,
  });
};

export const getDeviation = async (id: string): Promise<Deviation | null> => {
  const repository = getRepository(Deviation);
  const deviation = await repository.findOne({ id: id });
  if (!deviation) return null;
  return deviation;
};
/* eslint-disable */
