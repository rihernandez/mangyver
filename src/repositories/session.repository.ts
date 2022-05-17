/* eslint-disable */
import { Role } from "../models";
import { getRepository } from "typeorm";
import { Session } from "../models";

export interface ISessionPayload {
  token: string;
  session: string;
  ip: string;
  mac: string;
  os: string;
  device: string;
  navigator: string;
  appVersion: string;
  isActive: boolean;
}

export const getSessions = async (): Promise<Array<Session>> => {
  const repository = getRepository(Session);
  return repository.find({ where: { isActive: true } });
};

export const createSession = async (
  payload: ISessionPayload
): Promise<Session> => {
  const repository = getRepository(Session);
  const session = new Session();
  return repository.save({
    ...session,
    ...payload,
  });
};

export const getSession = async (token: string): Promise<Session | null> => {
  const repository = getRepository(Session);
  const session = await repository.findOne({ token: token });
  if (!session) return null;
  return session;
};

export const updateUserStatus = async (id: string): Promise<Session | null> => {
  const repository = getRepository(Session);
  const session = await repository.findOne({ id: id });
  if (!session) return null;
  await repository.save(session);
  return session;
};
/* eslint-disable */
