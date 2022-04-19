/* eslint-disable */
import { getRepository } from "typeorm";
import { ObjectParts } from "../models";

export interface IObjectPartsPayload {
  name: string;
  SAPCode: string;
  groupCode: String;
  isActive: boolean;
}

export const getObjectParts = async (
  groupCode?: string
): Promise<Array<ObjectParts>> => {
  const repository = getRepository(ObjectParts);
  if (groupCode) {
    return repository.find({ where: { groupCode: groupCode }, order: { name: "DESC" } });
  }
  return repository.find({ order: { name: "DESC" } });
};

export const createObjectParts = async (
  payload: IObjectPartsPayload
): Promise<ObjectParts> => {
  const repository = getRepository(ObjectParts);
  const obj = new ObjectParts();
  return repository.save({
    ...obj,
    ...payload,
  });
};

export const getObjectPart = async (
  id: string
): Promise<ObjectParts | null> => {
  const repository = getRepository(ObjectParts);
  const obj = await repository.findOne({ id: id });
  if (!obj) return null;
  return obj;
};
