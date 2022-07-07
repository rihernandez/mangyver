/* eslint-disable */
import { profile } from "console";
import { Get, Route, Tags, Post, Body, Path, Query, Put } from "tsoa";
import { Notice } from "../models";
import {
  getNotice,
  getNotices,
  createNotice,
  updateNotice,
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
    @Query() dateFrom: string,
    @Query() dateEnd: string,
    @Query() sapForm: boolean,
    @Query() isWeb: boolean,
    @Query() timeFrom: string,
    @Query() timeEnd: string,
    @Query() operationId: string,
    @Query() filter: string,
    @Query() totalRows: boolean,
    @Query() isActive: boolean
  ): Promise<Array<Notice>> {
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

  @Put("/:id")
  public async updateNotice(
    @Path() id: string,
    @Body() body: INoticenPayloadNewFormat
  ): Promise<String> {
    return updateNotice(id, body);
  }

  @Get("/:id")
  public async getNotice(@Path() id: string): Promise<Notice | null> {
    return getNotice(id);
  }
}
/* eslint-disable */
