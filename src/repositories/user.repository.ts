import { Role } from "../models";
import { getRepository } from "typeorm";
import { User } from "../models";

export interface IUserPayload {
  name: string;
  username: string;
  password: string;
  email: string;
  role: Role;
  isActive: boolean;
}

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = getRepository(User);
  return userRepository.find({ relations: ['operation', 'area', 'line', 'role']});
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUser = async (id: string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id: id },{ relations: ['operation', 'area', 'line', 'role']});
  if (!user) return null;
  return user;
};

export const updateUserStatus = async (id: string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id: id },{ relations: ['operation', 'area', 'line', 'role']});
  if (!user) return null;
  user.auth = "active";
  await userRepository.save(user);
  return user;
};