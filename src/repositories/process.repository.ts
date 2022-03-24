/* eslint-disable */
import { getRepository, getConnection } from "typeorm";
import { Process, ProcessType, Operation } from "../models";

export interface IProcessPayload {
  processType: ProcessType;
  name: string;
  SAPCode: string;
  operation: Operation;
  isActive: boolean;
}

// export const getProcesMobile = async (
//   operationId?: string
// ): Promise<Array<Process>> => {
//   const repository = getRepository(Process);
//   return repository.find({
//     select: ["id", "processType", "name","SAPCode","operation","isActive","created"],
//     where: { operation: operationId},
//     });
// };

export const getProcesMobile = async (operationId?: string) => {
  const connection = getConnection();
  const result = await connection.query(
    "SP_PorecessesMobile @operationId='" + operationId + "'"
  );

  if (!result) {
    return { msg: "No hay Informacion disponible para mostrar." };
  }
  return result;
};

// export const getProcesss = async (
//   operationId?: string
// ): Promise<Array<Process>> => {
//   const repository = getRepository(Process);
//   return repository.find({ where: [{ operation: operationId }] });
// };

export const getProcesss = async (operationId?: string) => {
  const connection = getConnection();
  const result = await connection.query(
    "SP_Processes @operationId='" + operationId + "'"
  );

  if (!result) {
    return { msg: "No hay Informacion disponible para mostrar." };
  }
  return result;
};

export const createProcess = async (
  payload: IProcessPayload
): Promise<Process> => {
  const repository = getRepository(Process);
  const process = new Process();
  return repository.save({
    ...process,
    ...payload,
  });
};

export const getProcess = async (id: string): Promise<Process | null> => {
  const repository = getRepository(Process);
  const process = await repository.findOne({ processId: id });
  if (!process) return null;
  return process;
};
