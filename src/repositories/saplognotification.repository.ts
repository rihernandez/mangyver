/* eslint-disable */
import { getRepository } from "typeorm";
import { SapLogNotification } from "../models";
import { Notice } from "../models";

export interface ISapLogPayload {
  notice: string;
  SAPnoticeId: string;
  statusResult: string;
  errorCode: string;
  username: string;
  created: Date;
}

export const getAllSapLog = async (): Promise<Array<SapLogNotification>> => {
  const repository = getRepository(SapLogNotification);
  return repository.find();
};

export const createSapLog = (
  payload: ISapLogPayload
): Promise<SapLogNotification> => {
  const repository = getRepository(SapLogNotification);
  const sapLog = new SapLogNotification();
  return repository.save({
    ...sapLog,
    ...payload,
  });
};

export const getSapLog = async (
  id: string
): Promise<SapLogNotification | null> => {
  const repository = getRepository(SapLogNotification);
  const sapLog = await repository.findOne({ id: id });
  if (!sapLog) return null;
  return sapLog;
};
/* eslint-disable */
