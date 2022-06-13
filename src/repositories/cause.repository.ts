/* eslint-disable */
import { getRepository, Like } from "typeorm";
import { Cause } from "../models";

export interface ICausePayload {
  name: string;
  SAPCode: string;
  groupCode: String;
  isActive: boolean;
}

export const getCauses = async (groupCode?: string, from?: number, top?: number, name?: string): Promise<Array<Cause>> => {
  const repository = getRepository(Cause);
  if (groupCode) {
    return repository.find({
      where: { 
        groupCode: groupCode, 
        isActive: true,
        ...(name && { name: Like(`%${name}%`) }) 
      },
      order: { name: "ASC" },
      skip: from,
      take: top,
    });
  }
  return repository.find({ where: { isActive: true, ...(name && { name: Like(`%${name}%`) }) }, order: { name: "ASC" }, skip: from, take: top, });
};

export const createCause = async (payload: ICausePayload): Promise<Cause> => {
  const repository = getRepository(Cause);
  const cause = new Cause();
  return repository.save({
    ...cause,
    ...payload,
  });
};

export const getCause = async (id: string): Promise<Cause | null> => {
  const repository = getRepository(Cause);
  const cause = await repository.findOne({ id: id });
  if (!cause) return null;
  return cause;
};
