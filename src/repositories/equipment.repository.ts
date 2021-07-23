import { getRepository } from "typeorm";
import { Equipment } from "../models";

export interface IEquipmentPayload {
  name: string;
  password: string;
  email: string;
  isActive: boolean;
}

export const getEquipments = async (): Promise<Array<Equipment>> => {
  const equipmentRepository = getRepository(Equipment);
  return equipmentRepository.find();
};

export const createEquipment = async (payload: IEquipmentPayload): Promise<Equipment> => {
  const equipmentRepository = getRepository(Equipment);
  const equipment = new Equipment();
  return equipmentRepository.save({
    ...equipment,
    ...payload,
  });
};

export const getEquipment = async (id: number): Promise<Equipment | null> => {
  const equipmentRepository = getRepository(Equipment);
  const equipment = await equipmentRepository.findOne({ id: id });
  if (!equipment) return null;
  return equipment;
};
