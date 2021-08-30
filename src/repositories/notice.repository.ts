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
} from "../models";

export interface INoticePayload {
  OTCode: string;
  didCard: string;
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
  breakdown: Breakdown;
  failureType: TypeFail;
  affects: Affect;
  affectsFile: string;
  isActive?: boolean;
  cardDescription: string;
  process: Process;
}

export const getNotices = async (
  userId: string,
  top?: number,
  from?: number,
  dateFrom?: string,
  dateEnd?: string,
  sapForm?: boolean
): Promise<Array<Notice>> => {

  const repository = getRepository(Notice).query(
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

export const getNotice = async (
  id: string,
  top: number,
  from: number,
  dateFrom: string,
  dateEnd: string,
  sapForm: boolean
): Promise<Notice | null> => {
  const repository = await getRepository(Notice).query(
    "SP_Select_Notices @userid='" +
    null +
    "', @id='" +
    id +
    "', @top='" +
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
