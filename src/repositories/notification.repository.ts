/* eslint-disable */
import { getRepository } from "typeorm";
import { Notification, OperationNumber, Deviation, Operation } from "../models";

export interface INotificationPayload {
  deviation: Deviation;
  operationNum: OperationNumber;
  operation: Operation;
  otCode: string;
  startHour: Date;
  endHour: Date;
  isDone: boolean;
  comments?: string;
}

export const getNotifications = async (
  userId: string,
  top?: number,
  from?: number,
  dateFrom?: string,
  dateEnd?: string,
  sapForm?: boolean
): Promise<Array<Notification>> => {
  const repository = getRepository(Notification).query(
    "SP_Select_Notification @userid='" +
      userId +
      "', @id=" +
      null +
      ", @top='" +
      top +
      "', @from='" +
      from +
      "', @DateFrom='" +
      dateFrom +
      "', @DateEnd='" +
      dateEnd +
      "',@SAPForm='" +
      sapForm +
      "'"
  );
  return repository;
};

export const createNotification = async (
  payload: INotificationPayload
): Promise<Notification> => {
  const repository = getRepository(Notification);
  const notification = new Notification();

  console.log(payload.startHour.toString());
  return repository.save({
    ...notification,
    ...payload,
  });
};

export const getNotification = async (
  id: string
): Promise<Notification | null> => {
  // const repository = getRepository(Notification);
  // const notification = await repository.findOne({ id: id });
  // if (!notification) return null;
  // return notification;
  const repository = await getRepository(Notification).query(
    "SP_Select_Notification @userid='" + null + "', @id='" + id + "'"
  );
  return repository;
};
/* eslint-disable */
