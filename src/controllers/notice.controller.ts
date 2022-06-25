/* eslint-disable */
import { profile } from "console";
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { Notice } from "../models";
import {
  getNotice,
  getNotices,
  createNotice,
  INoticePayload,
  INoticenPayloadNewFormat,
  createnewNoticeFormat,
} from "../repositories/notice.repository";

@Route("notices")
@Tags("Notice")
export default class NoticeController {
  @Get("/")
  public async getNotices(
    @Query() profileId: string,
    @Query() top: number,
    @Query() from: number,
    @Query() dateFrom: string | null,
    @Query() dateEnd: string | null,
    @Query() sapForm: boolean,
    @Query() isWeb: boolean,
    @Query() timeFrom: string | null,
    @Query() timeEnd: string | null,
    @Query() operationId: string,
    @Query() filter: string,
    @Query() totalRows: boolean,
    @Query() isActive: boolean
  ): Promise<Array<Notice>> {

    if (dateFrom === 'null') {
      dateFrom = null
      dateEnd = null
    }else {
      dateFrom = `'${dateFrom}'`
      dateEnd = `'${dateEnd}'`
    }
  
    if (timeFrom === 'null') {
      timeFrom = null
      timeEnd = null
    }else {
      timeFrom = `'${timeFrom}'`
      timeEnd = `'${timeEnd}'`
    }

    const tt = getNotices(
      profileId,
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
      totalRows,
      isActive
    );
    return tt;
  }

  @Post("/old_notice")
  public async createNotice(@Body() body: INoticePayload): Promise<Notice> {
    return createNotice(body);
  }

  @Post("/")
  public async createNoticeNewFormat(
    @Body() body: INoticenPayloadNewFormat
  ): Promise<Notice> {
    return createnewNoticeFormat(body);
  }

  @Get("/:id")
  public async getNotice(@Path() id: string): Promise<Notice | null> {
    return getNotice(id);
  }
}
/* eslint-disable */
