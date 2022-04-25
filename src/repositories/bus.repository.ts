/* eslint-disable */
import { getRepository } from "typeorm";
import { Bus } from "../models";
import { Zone } from "../models";

export interface IBusPayload {
  zone: Zone;
  name: string;
  code: string;
  isActive: boolean;
}

export const getAllBus = async (): Promise<Array<Bus>> => {
  const busRepository = getRepository(Bus);
  return busRepository.find({ order: { name: "DESC" } });
};

export const createBus = async (payload: IBusPayload): Promise<Bus> => {
  const busRepository = getRepository(Bus);
  const bus = new Bus();
  return busRepository.save({
    ...bus,
    ...payload,
  });
};

export const getBus = async (id: string): Promise<Bus | null> => {
  const busRepository = getRepository(Bus);
  const bus = await busRepository.findOne({ id: id });
  if (!bus) return null;
  return bus;
};
/* eslint-disable */
