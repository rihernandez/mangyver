/* eslint-disable */
import { getRepository } from "typeorm";
import { Area, Subarea } from "../models";

export interface ISubareaPayload {
  name: string;
  code: string;
  area: Area;
  isActive: boolean;
}

export const getSubareas = async (): Promise<Array<Subarea>> => {
  const subareaRepository = getRepository(Subarea);
  return subareaRepository.find({ where: { isActive: true } });
};

export const createSubarea = async (
  payload: ISubareaPayload
): Promise<Subarea> => {
  const subareaRepository = getRepository(Subarea);
  const subarea = new Subarea();
  return subareaRepository.save({
    ...subarea,
    ...payload,
  });
};

export const getSubarea = async (id: string): Promise<Subarea | null> => {
  const subareaRepository = getRepository(Subarea);
  const subarea = await subareaRepository.findOne({ id: id });
  if (!subarea) return null;
  return subarea;
};
/* eslint-disable */
