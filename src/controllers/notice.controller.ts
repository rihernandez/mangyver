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
    @Query() top: unknown,
    @Query() from: unknown,
    @Query() dateFrom: unknown,
    @Query() dateEnd: unknown,
    @Query() sapForm: unknown
  ): Promise<Array<Notice>> {
    return getNotices(
      profileId,
      Number(top || 0),
      Number(from || 0),
      String(dateFrom || "19000101"),
      String(dateEnd || "19000101"),
      Boolean(sapForm || 0)
    );
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
