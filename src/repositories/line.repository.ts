/* eslint-disable */
import { getRepository } from "typeorm";
import { Line, Area } from "../models";

export interface ILinePayload {
  area: Area;
  name: string;
  SAPCode: string;
  isActive: boolean;
}

export const getLines = async (areaId?: string): Promise<Array<Line>> => {
  const repository = getRepository(Line);
  if (areaId) {
    return repository.find({ where: { area: areaId, isActive: true } });
  }

  return repository.find({ order: { name: "ASC" }, where: { isActive: true } });
};

export const createLine = async (payload: ILinePayload): Promise<Line> => {
  const repository = getRepository(Line);
  const line = new Line();
  return repository.save({
    ...line,
    ...payload,
  });
};

export const getLine = async (id: string): Promise<Line | null> => {
  const repository = getRepository(Line);
  const line = await repository.findOne({ id: id });
  if (!line) return null;
  return line;
};
/* eslint-disable */
