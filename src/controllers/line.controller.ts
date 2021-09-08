import { Get, Route, Tags,  Post, Body, Path, Query } from "tsoa";
import {Line} from '../models'
import {getLines, createLine, ILinePayload, getLine} from '../repositories/line.repository'

@Route("lines")
@Tags("Line")
export default class LineController {
  @Get("/")
  public async getLines(@Query() area?: string): Promise<Array<Line>> {
    return getLines(area)
  }

  @Post("/")
  public async createLine(@Body() body: ILinePayload): Promise<Line> {
    return createLine(body)
  }

  @Get("/:id")
  public async getLine(@Path() id: string): Promise<Line | null> {
    return getLine(id)
  }
}
