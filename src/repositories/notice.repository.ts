import { getRepository } from "typeorm";
import { Notice } from "../models";

export interface INoticePayload {
  id: number;
  type: string;
  order: number;
  ubication: string;
  equipment: string;
  analysis: string;
  description: string;
  user: number;
  priority: string;
  isActive: boolean;
  created: Date;
}

export const getNotices = async (): Promise<Array<Notice>> => {
  const repository = getRepository(Notice);
  return repository.find();
};

export const createNotice = async (
  payload: INoticePayload
): Promise<Notice> => {
  const repository = getRepository(Notice);
  const notice = new Notice();
  return repository.save({
    ...notice,
    ...payload,
  });
};

export const getNotice = async (id: string): Promise<Notice | null> => {
  const repository = getRepository(Notice);
  const notification = await repository.findOne({ id: id });
  if (!notification) return null;
  return notification;
};
