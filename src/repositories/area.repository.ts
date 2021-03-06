/* eslint-disable */
import { getRepository } from "typeorm";
import { Area } from "../models";

export interface IAreaPayload {
  name: string;
  password: string;
  email: string;
  isActive: boolean;
}

export const getAreas = async (operation?: string): Promise<Array<Area>> => {
  const areaRepository = getRepository(Area);
  if (operation) {
    return areaRepository.find({ where: { operation, isActive: true } });
  }
  return areaRepository.find({ order: { name: "ASC" }, where: { isActive: true } });
};

export const createArea = async (payload: IAreaPayload): Promise<Area> => {
  const areaRepository = getRepository(Area);
  const area = new Area();
  return areaRepository.save({
    ...area,
    ...payload,
  });
};

export const getArea = async (id: string): Promise<Area | null> => {
  const areaRepository = getRepository(Area);
  const area = await areaRepository.findOne({ id: id });
  if (!area) return null;
  return area;
};
/* eslint-disable */
