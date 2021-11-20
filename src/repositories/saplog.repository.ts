/* eslint-disable */
import { getRepository } from "typeorm";
import { SapLog } from "../models";
import { Notice } from "../models";

export interface ISapLogPayload {
  notice: string;
  SAPnoticeId: string;
  statusResult: string;
  errorCode: string;
  username: string;
  created: Date;
}

export const getAllSapLog = async (): Promise<Array<SapLog>> => {
  const repository = getRepository(SapLog);
  return repository.find();
};

export const createSapLog = async (
  payload: ISapLogPayload
): Promise<SapLog> => {
  const repository = getRepository(SapLog);
  const sapLog = new SapLog();
  return repository.save({
    ...sapLog,
    ...payload,
  });
};

export const getSapLog = async (id: string): Promise<SapLog | null> => {
  const repository = getRepository(SapLog);
  const sapLog = await repository.findOne({ id: id });
  if (!sapLog) return null;
  return sapLog;
};
/* eslint-disable */
