import { getRepository } from "typeorm";
import {
  Affect,
  Breakdown,
  Card,
  Component,
  Consecutive,
  Line,
  Notice,
  Priority,
  TypeFail,
  Process
} from "../models";

export interface INoticePayload {
  OTCode: string;
  didCard : string;
  failureTime: string;
  department: string;
  equipmentCode: string;
  line: Line;
  equipmentType: string;
  consecutive: Consecutive;
  cardType: Card;
  cardTitle: string;
  priority: Priority;
  components: Component;
  breakdown:Breakdown;
  failureType: TypeFail;
  affects: Affect;
  affectsFile: string;
  isActive?: boolean;
  cardDescription: string;
  processType: Process
}

export const getNotices = async (): Promise<Array<Notice>> => {
  const repository = getRepository(Notice);
  return repository.find({ relations: ['line', 'consecutive', 'cardType', 'priority', 'components', 'breakdown', 'failureType', 'affects', 'processType'] });
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
  const notification = await repository.findOne({ id: id }, { relations: ['line', 'consecutive', 'cardType', 'priority', 'components', 'breakdown', 'failureType', 'affects', 'processType'] });
  if (!notification) return null;
  return notification;
};
