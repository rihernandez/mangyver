import { getRepository } from "typeorm";
import { Component, LineMachine, Operation } from "../models";

export interface IComponentPayload {
  machine: LineMachine;
  name: string;
  SAPCode: string;
  operation: Operation;
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

export const getComponent = async (id: string): Promise<Component | null> => {
  const repository = getRepository(Component);
  const component = await repository.findOne({ id: id });
  if (!component) return null;
  return component;
};
