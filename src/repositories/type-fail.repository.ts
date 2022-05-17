/* eslint-disable */
import { getRepository } from "typeorm";
import { Operation, TypeFail } from "../models";

export interface ITypeFailPayload {
  name: string;
  SAPCode: string;
  isActive: boolean;
  operation: Operation;
  shortname: string;
}

export const getTypeFails = async (
  operationId?: string
): Promise<Array<TypeFail>> => {
  const repository = getRepository(TypeFail);
  return repository.find({
    where: [{ operation: operationId, isActive: true }],
    order: { name: "ASC" },
  });
};

export const createTypeFail = async (
  payload: ITypeFailPayload
): Promise<TypeFail> => {
  const repository = getRepository(TypeFail);
  const typeFail = new TypeFail();
  return repository.save({
    ...typeFail,
    ...payload,
  });
};

export const getTypeFail = async (id: string): Promise<TypeFail | null> => {
  const repository = getRepository(TypeFail);
  const typeFail = await repository.findOne({ id: id });
  if (!typeFail) return null;
  return typeFail;
};
/* eslint-disable */
