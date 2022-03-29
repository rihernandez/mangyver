/* eslint-disable */
import { getRepository } from "typeorm";
import { Help, Operation } from "../models";

export interface IHelpPayload {
  url: string;
  operation: Operation;
  isActive: boolean;
}

export const getAllHelps = async (): Promise<Array<Help>> => {
  const helpRepository = getRepository(Help);
  return helpRepository.find();
};

export const createHelp = async (payload: IHelpPayload): Promise<Help> => {
  const helpRepository = getRepository(Help);
  const help = new Help();
  return helpRepository.save({
    ...help,
    ...payload,
  });
};

export const getHelp = async (id: string): Promise<Help | null> => {
  const helpRepository = getRepository(Help);
  const help = await helpRepository.findOne({ id: id });
  if (!help) return null;
  return help;
};
/* eslint-disable */
