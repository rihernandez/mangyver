import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Line} from '../models'
import {getLines, createLine, ILinePayload, getLine} from '../repositories/line.repository'

@Route("lines")
@Tags("Line")
export default class LineController {
  @Get("/")
  public async getLines(): Promise<Array<Line>> {
    return getLines()
  }

  @Post("/")
  public async createLine(@Body() body: ILinePayload): Promise<Line> {
    return createLine(body)
  }

  @Get("/:id")
  public async getLine(@Path() id: string): Promise<Line | null> {
    return getLine(Number(id))
  }
}
