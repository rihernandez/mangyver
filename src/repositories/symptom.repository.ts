/* eslint-disable */
import { getRepository } from "typeorm";
import { Symptom } from "../models";

export interface ISymptomPayload {
  name: string;
  SAPCode: string;
  groupCode: string;
  isActive: boolean;
}

export const getSymptoms = async (
  groupCode?: string
): Promise<Array<Symptom>> => {
  const repository = getRepository(Symptom);
  if (groupCode) {
    return repository.find({
      where: { groupCode: groupCode },
      order: { name: "DESC" },
    });
  }
  return repository.find({ order: { name: "DESC" } });
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
