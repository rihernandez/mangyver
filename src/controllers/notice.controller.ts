import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Notice} from '../models'
import {getNotice, getNotices, createNotice, INoticePayload} from '../repositories/notice.repository'

@Route("notices")
@Tags("Notice")
export default class NoticeController {
  @Get("/")
  public async getNotices(): Promise<Array<Notice>> {
    return getNotices();
  }

  @Post("/")
  public async createNotice(@Body() body: INoticePayload): Promise<Notice> {
    return createNotice(body)
  }

  @Get("/:id")
  public async getNotice(@Path() id: string): Promise<Notice | null> {
    return getNotice(Number(id))
  }
}