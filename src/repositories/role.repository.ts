/* eslint-disable */
import { Role } from "../models";
import { MenuRole } from "src/models/menu-role";
import { getRepository } from "typeorm";

export interface IRolePayload {
  id: string;
  name: string;
  menus: MenuRole[];
  isActive: boolean;
  created: Date;
}

export const getRoles = async (): Promise<Array<Role>> => {
  const repository = getRepository(Role);
  return repository.find({ relations: ["menus"] });
};

export const createRole = async (payload: IRolePayload): Promise<Role> => {
  const repository = getRepository(Role);
  const role = new Role();
  return repository.save({
    ...role,
    ...payload,
  });
};

export const getRole = async (id: string): Promise<Role | null> => {
  const repository = getRepository(Role);
  const role = await repository.findOne({ id: id }, { relations: ["menus"] });
  if (!role) return null;
  return role;
};

export const updateRoleStatus = async (id: string): Promise<Role | null> => {
  const repository = getRepository(Role);
  const role = await repository.findOne({ id: id }, { relations: ["menus"] });
  if (!role) return null;
  await repository.save(role);
  return role;
};
/* eslint-disable */
