/* eslint-disable */
import internal from "stream";
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
  Process,
  Equipment,
  User,
  Operation,
} from "../models";

export interface INoticePayload {
  otCode: string;
  didCard: string;
  failureTime: string;
  department: string;
  // equipmentCode: string;
  line: Line;
  // equipmentType: string;
  // consecutive: Consecutive;
  cardType: Card;
  cardTitle: string;
  priority: Priority;
  components: Component;
  breakdown: Breakdown;
  failureType: TypeFail;
  affects: Affect;
  affectsFile: string;
  isActive?: boolean;
  cardDescription: string;
  process: Process;
  user: User;
  sapId: string;
  operation: Operation;
}

export interface INoticenPayloadNewFormat {
  processId: Process;
  didCard: string;
  failureTime: string;
  department: string;
  lineId: Line;
  equipment: Equipment;
  cardTypeId: Card;
  cardTitle: string;
  priorityId: Priority;
  componentsId: Component;
  breakdownId: Breakdown;
  failureTypeId: TypeFail;
  cardDescription: string;
  affectsId: Affect;
  otCode: string;
  id: string;
  affectsFile: string;
  userId: null;
  isActive: true;
  sapId: string;
  operation: Operation;
}

export const getNotices = async (
  userId: string,
  top?: number,
  from?: number,
  dateFrom?: string,
  dateEnd?: string,
  sapForm?: boolean
): Promise<Array<Notice>> => {
  const repository = await getRepository(Notice).query(
    "SP_Select_Notices @userid='" +
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
  //return repository.find({ relations: ['line', 'consecutive', 'cardType', 'priority', 'components', 'breakdown', 'failureType', 'affects', 'process']});
  console.log(repository);
  return repository;
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

export const createnewNoticeFormat = async (
  payload: INoticenPayloadNewFormat
): Promise<Notice> => {
  const repository = getRepository(Notice);
  const notice = new Notice();
  return repository.save({
    ...notice,
    ...payload,
  });
};

export const getNotice = async (id: string): Promise<Notice | null> => {
  const repository = await getRepository(Notice).query(
    "SP_Select_Notices @userid='" + null + "', @id='" + id + "'"
  );
  //"SP_Select_Notices @id='"+id +"'"
  //const notification = await repository.findOne({ id: id }, { relations: ['line', 'consecutive', 'cardType', 'priority', 'components', 'breakdown', 'failureType', 'affects', 'process'] });
  // if (!notification) return null;
  // const entries = Object.entries(notification);
  //  entries.map(entry =>

  //   console.log(Object.assign(entry, { 9: +entry[0] })));

  // return notification;
  console.log(repository);
  return repository;
};
/* eslint-disable */
