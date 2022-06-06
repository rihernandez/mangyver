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
  ObjectParts,
  Cause,
  Symptom,
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
  objectId: ObjectParts;
  causeId: Cause;
  symptomId: Symptom;
  textCause: string;
  textSymptom: string;
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
  objectId?: ObjectParts;
  causeId?: Cause;
  symptomId?: Symptom;
  textCause: string;
  textSymptom: string;
}

export const getNotices = async (
  userId: string,
  top?: number,
  from?: number,
  dateFrom?: string | null,
  dateEnd?: string | null,
  sapForm?: boolean,
  isWeb?: boolean,
  timeFrom?: string | null,
  timeEnd?: string | null,
  operationId?: string | null,
  filter?: string | null,
  totalRows?: boolean
): Promise<Array<Notice>> => {
  console.log(
    userId,
    top,
    from,
    dateFrom,
    dateEnd,
    sapForm,
    isWeb,
    timeFrom,
    timeEnd,
    operationId,
    filter,
    totalRows
  );

  // const pp = new Date(Date.parse("19000101")).toDateString()

  const repository = await getRepository(Notice).query(
    "SP_Select_Notices @userid='" +
      userId +
      "', @id=" +
      null +
      ", @top=" +
      top +
      ", @from=" +
      from +
      ", @DateFrom=" +
      dateFrom +
      ", @DateEnd=" +
      dateEnd +
      " ,@SAPForm='" +
      sapForm +
      "',@isWeb='" +
      isWeb +
      "',@timeFrom='" +
      timeFrom +
      "',@timeEnd='" +
      timeEnd +
      "',@operationId=" +
      operationId +
      ",@filter=" +
      filter +
      ",@totalRows=" +
      totalRows +
      ""
  );
  //return repository.find({ relations: ['line', 'consecutive', 'cardType', 'priority', 'components', 'breakdown', 'failureType', 'affects', 'process']});
  return repository;
  //  return [];
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
