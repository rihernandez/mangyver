/* eslint-disable */
import { getRepository } from "typeorm";
import { Breakdown, Operation } from "../models";

export interface IBreakdownPayload {
  name: string;
  SAPCode: string;
  operation: Operation;
  isActive: boolean;
}

export const getBreakdowns = async (): Promise<Array<Breakdown>> => {
  const repository = getRepository(Breakdown);
  return repository.find({ where: { isActive: true } });
};

export const createBreakdown = async (
  payload: IBreakdownPayload
): Promise<Breakdown> => {
  const repository = getRepository(Breakdown);
  const breackdown = new Breakdown();
  return repository.save({
    ...Breakdown,
    ...payload,
  });
};

export const getBreakdown = async (id: string): Promise<Breakdown | null> => {
  const repository = getRepository(Breakdown);
  const breackdown = await repository.findOne({ id: id });
  if (!breackdown) return null;
  return breackdown;
};
/* eslint-disable */
