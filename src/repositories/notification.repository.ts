import { getRepository } from "typeorm";
import { Notification, OperationNumber, Deviation } from "../models";

export interface INotificationPayload {
    deviation: Deviation;
    operationNum: OperationNumber;
    OTCode: string;
    startHour: Date;
    endHour: Date;
    isDone: boolean;
    comments?: string;
}

export const getNotifications = async (): Promise<Array<Notification>> => {
    const repository = getRepository(Notification);
    return repository.find();
};
  
export const createNotification = async (payload: INotificationPayload): Promise<Notification> => {
    const repository = getRepository(Notification);
    const notification = new Notification();
    console.log( payload.startHour.toString());
    return repository.save({
        ...notification,
        ...payload,
    });
};
  
export const getNotification = async (id: string): Promise<Notification | null> => {
    const repository = getRepository(Notification);
    const notification = await repository.findOne({ id: id });
    if (!notification) return null;
    return notification;
};