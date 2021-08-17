import { getRepository } from "typeorm";
import { Component, LineMachine } from "../models";

export interface IComponentPayload {
  machineId: LineMachine;
  name: string;
  SAPCode: string;
  isActive: boolean;
}

export const getComponents = async (): Promise<Array<Component>> => {
  const repository = getRepository(Component);
  return repository.find();
};

export const createComponent = async (payload: IComponentPayload): Promise<Component> => {
  const repository = getRepository(Component);
  const component = new Component();
  return repository.save({
    ...component,
    ...payload,
  });
};

export const getComponent = async (id: number): Promise<Component | null> => {
  const repository = getRepository(Component);
  const component = await repository.findOne({ componentId: id });
  if (!component) return null;
  return component;
};
