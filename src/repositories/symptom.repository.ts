/* eslint-disable */
import { getRepository, Like } from "typeorm";
import { Symptom } from "../models";

export interface ISymptomPayload {
  name: string;
  SAPCode: string;
  groupCode: string;
  isActive: boolean;
}

export const getSymptoms = async (
  groupCode?: string,
  from?: number,
  top?: number,
  name?: string,
): Promise<Array<Symptom>> => {
  const repository = getRepository(Symptom);
  if (groupCode) {
    return repository.find({
      where: { 
        groupCode: groupCode, 
        isActive: true,
        ...(name && { name: Like(`%${name}%`) }), 
      },
      order: { name: "DESC" },
      skip: from,
      take: top,
    });
  }
  return repository.find({ where: { isActive: true, ...(name && { name: Like(`%${name}%`) }) }, order: { name: "ASC" }, skip: from, take: top, });
};

export const createSymptom = async (
  payload: ISymptomPayload
): Promise<Symptom> => {
  const repository = getRepository(Symptom);
  const symp = new Symptom();
  return repository.save({
    ...symp,
    ...payload,
  });
};
export const getSymptom = async (id: string): Promise<Symptom | null> => {
  const repository = getRepository(Symptom);
  const symp = await repository.findOne({ id: id });
  if (!symp) return null;
  return symp;
};
