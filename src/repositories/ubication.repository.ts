import { getRepository } from "typeorm";
import { Subarea, Ubication } from "../models";

export interface IUbicationPayload {
  name: string;
  code: string; 
  subarea: Subarea;
  isActive: boolean;
}

export const getUbications = async (): Promise<Array<Ubication>> => {
  const ubicationRepository = getRepository(Ubication);
  return ubicationRepository.find();
};

export const createUbication = async (payload: IUbicationPayload): Promise<Ubication> => {
  const ubicationRepository = getRepository(Ubication);
  const ubication = new Ubication();
  return ubicationRepository.save({
    ...ubication,
    ...payload,
  });
};

export const getUbication = async (id: number): Promise<Ubication | null> => {
  const ubicationRepository = getRepository(Ubication);
  const ubication = await ubicationRepository.findOne({ id: id });
  if (!ubication) return null;
  return ubication;
};
