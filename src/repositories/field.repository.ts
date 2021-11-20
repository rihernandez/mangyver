/* eslint-disable */
import { getRepository } from "typeorm";
import { Field, Ichildfield } from "../models";

export interface IFieldPayload {
  fieldType: string;
  label: string;
  optionsEndpoint: string;
  validations: string;
  childfield: string;
}

export const getFields = async (): Promise<Array<Field>> => {
  const repository = getRepository(Field);
  return repository.find();
};

export const createField = async (payload: IFieldPayload): Promise<Field> => {
  const repository = getRepository(Field);
  const field = new Field();
  return repository.save({
    ...field,
    ...payload,
  });
};

export const getField = async (id: string): Promise<Field | null> => {
  const repository = getRepository(Field);
  const field = await repository.findOne({ id: id });
  if (!field) return null;
  return field;
};
/* eslint-disable */
