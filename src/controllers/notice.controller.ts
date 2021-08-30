import { profile } from "console";
import { Get, Route, Tags,  Post, Body, Path, Query } from "tsoa";
import {Notice} from '../models'
import {getNotice, getNotices, createNotice, INoticePayload} from '../repositories/notice.repository'

@Route("notices")
@Tags("Notice")
export default class NoticeController {
  @Get("/")
  public async getNotices(@Query() profileId: string, @Query() top: unknown,  @Query() from: unknown, @Query() dateFrom: unknown, @Query() dateEnd: unknown, @Query() sapForm: boolean ): Promise<Array<Notice>> {
    return getNotices(profileId, Number(top || 0), Number(from || 0), String(dateFrom || "19000101"), String(dateEnd || "19000101"), sapForm);
  }

  @Post("/")
  public async createNotice(@Body() body: INoticePayload): Promise<Notice> {
    return createNotice(body)
  }

  @Get("/:id")
  public async getNotice(@Path() id: string, @Query() top: unknown, @Query() from: unknown, @Query() dateFrom: unknown, @Query() dateEnd: unknown, @Query() sapForm: boolean): Promise<Notice | null> {
    return getNotice(id, Number(top), Number(from), String(dateFrom), String(dateEnd), sapForm)
  }
}