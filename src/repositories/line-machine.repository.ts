/* eslint-disable */
import { getRepository, Like } from "typeorm";
import { LineMachine, Line } from "../models";

export interface ILineMachinePayload {
  line: Line;
  name: string;
  SAPCode: string;
  isActive: boolean;
  groupCode: string;
}

export const getLineMachines = async (
  lineId?: string,
  from?: number,
  top?: number,
  name?: string,
  SAPCode?: string
): Promise<Array<LineMachine>> => {
  const repository = getRepository(LineMachine);

  if (lineId) {
    return repository.find({
      // relations: ["line"],
      // line: {
      //   id: lineId
      // },
      where: {
        line: {
          id: lineId,
        },
        isActive: true,
        ...(name && { name: Like(`%${name}%`) }),
        ...(SAPCode && { SAPCode: Like(`%${SAPCode}%`) }),
      },
      order: {
        name: "ASC",
      },
      skip: from,
      take: top,
      cache: true,
    });
  }

  return repository.find({ order: { name: "ASC" }, where: { isActive: true } });
};

export const createLineMachine = async (
  payload: ILineMachinePayload
): Promise<LineMachine> => {
  const repository = getRepository(LineMachine);
  const lineMachine = new LineMachine();
  return repository.save({
    ...lineMachine,
    ...payload,
  });
};

export const getLineMachine = async (
  id: string
): Promise<LineMachine | null> => {
  const repository = getRepository(LineMachine);
  const lineMachine = await repository.findOne({ id: id });
  if (!lineMachine) return null;
  return lineMachine;
};
/* eslint-disable */
