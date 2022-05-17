/* eslint-disable */
import { getRepository } from "typeorm";
import { Bus, ObjectParts } from "../models";

export interface IObjectPartsPayload {
  name: string;
  SAPCode: string;
  groupCode: String;
  buId: Bus;
  isActive: boolean;
}

export const getObjectParts = async (
  groupCode?: string,
  from?: number,
  top?: number,
): Promise<Array<ObjectParts>> => {
  const repository = getRepository(ObjectParts);
  if (groupCode) {
    return repository.find({
      where: { groupCode: groupCode, isActive: true },
      order: { name: "DESC" },
      skip: from,
      take: top,
    });
  }
  return repository.find({ where: { isActive: true }, order: { name: "ASC" }, skip: from, take: top, });
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
