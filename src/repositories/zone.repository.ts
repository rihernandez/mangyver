/* eslint-disable */
import { getRepository } from "typeorm";
import { Zone } from "../models";

export interface IZonePayload {
  name: string;
  code: string;
  isActive: boolean;
}

export const getZones = async (): Promise<Array<Zone>> => {
  const zoneRepository = getRepository(Zone);
  return zoneRepository.find();
};

export const createZone = async (payload: IZonePayload): Promise<Zone> => {
  const zoneRepository = getRepository(Zone);
  const zone = new Zone();
  return zoneRepository.save({
    ...zone,
    ...payload,
  });
};

export const getZone = async (id: string): Promise<Zone | null> => {
  const zoneRepository = getRepository(Zone);
  const zone = await zoneRepository.findOne({ id: id });
  if (!zone) return null;
  return zone;
};
/* eslint-disable */
