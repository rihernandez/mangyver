import { getRepository } from "typeorm";
import { Line, Area } from "../models";

export interface ILinePayload {
  areaId: Area;
  name: string;
  SAPCode: string;
  isActive: boolean;
}

export const getLines = async (): Promise<Array<Line>> => {
  const repository = getRepository(Line);
  return repository.find();
};

export const createLine = async (payload: ILinePayload): Promise<Line> => {
  const repository = getRepository(Line);
  const line = new Line();
  return repository.save({
    ...line,
    ...payload,
  });
};

export const getLine = async (id: number): Promise<Line | null> => {
  const repository = getRepository(Line);
  const line = await repository.findOne({ lineId: id });
  if (!line) return null;
  return line;
};