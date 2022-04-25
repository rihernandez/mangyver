/* eslint-disable */
import { getRepository } from "typeorm";
import { Responsable, Operation } from "../models";

export interface IResponsablePayload {
  name: string;
  SAPCode: string;
  operation: Operation;
}

export const getResponsables = async (
  operation?: string
): Promise<Array<Responsable>> => {
  const responsableRepository = getRepository(Responsable);
  return responsableRepository.find({
    where: { operationId: operation },
    order: { name: "DESC" },
  });
};

export const createResponsable = async (
  payload: IResponsablePayload
): Promise<Responsable> => {
  const responsableRepository = getRepository(Responsable);
  const responsable = new Responsable();
  return responsableRepository.save({
    ...responsable,
    ...payload,
  });
};

export const getResponsable = async (
  id: string
): Promise<Responsable | null> => {
  const responsableRepository = getRepository(Responsable);
  const responsable = await responsableRepository.findOne({ id: id });
  if (!responsable) return null;
  return responsable;
};
/* eslint-disable */
