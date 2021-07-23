import { getRepository } from "typeorm";
import { Notification } from "../models";

export interface INotificationPayload {
  name: string;
  password: string;
  email: string;
  isActive: boolean;
}

export const getNotifications = async (): Promise<Array<Notification>> => {
  const notificationRepository = getRepository(Notification);
  return notificationRepository.find();
};

export const createNotification = async (payload: INotificationPayload): Promise<Notification> => {
  const notificationRepository = getRepository(Notification);
  const notification = new Notification();
  return notificationRepository.save({
    ...notification,
    ...payload,
  });
};

export const getNotification = async (id: number): Promise<Notification | null> => {
  const notificationRepository = getRepository(Notification);
  const notification = await notificationRepository.findOne({ id: id });
  if (!notification) return null;
  return notification;
};
