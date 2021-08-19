import { getRepository } from "typeorm";
import { LineMachine, Line } from "../models";

export interface ILineMachinePayload {
  line: Line;
  name: string;
  SAPCode: string;
  isActive: boolean;

}

export const getLineMachines = async (): Promise<Array<LineMachine>> => {
  const repository = getRepository(LineMachine);
  return repository.find();
};

export const createLineMachine = async (payload: ILineMachinePayload): Promise<LineMachine> => {
  const repository = getRepository(LineMachine);
  const lineMachine = new LineMachine();
  return repository.save({
    ...lineMachine,
    ...payload,
  });
};

export const getLineMachine = async (id: string): Promise<LineMachine | null> => {
  const repository = getRepository(LineMachine);
  const lineMachine = await repository.findOne({ id: id });
  if (!lineMachine) return null;
  return lineMachine;
};
