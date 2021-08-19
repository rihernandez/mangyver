import { getRepository } from "typeorm";
import { Login } from "../models";

export interface ILoginPayload {
  Login: string;
  password: string;
}

export const getZones = async (): Promise<Array<Login>> => {
  const loginRepository = getRepository(Login);
  return loginRepository.find();
};

export const createLogin = async (payload: ILoginPayload): Promise<Login> => {
  const loginRepository = getRepository(Login);
  const login = new Login();
  return loginRepository.save({
    ...login,
    ...payload,
  });
};

export const getLogin = async (id: string): Promise<Login | null> => {
  const loginRepository = getRepository(Login);
  const login = await loginRepository.findOne({ id: id });
  if (!login) return null;
  return login;
};
