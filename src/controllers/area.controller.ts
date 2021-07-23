import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Area} from '../models'
import {getArea, getAreas, createArea, IAreaPayload} from '../repositories/area.repository'

@Route("areas")
@Tags("Area")
export default class AreaController {
  @Get("/")
  public async getAreas(): Promise<Array<Area>> {
    return getAreas();
  }

  @Post("/")
  public async createArea(@Body() body: IAreaPayload): Promise<Area> {
    return createArea(body)
  }

  @Get("/:id")
  public async getArea(@Path() id: string): Promise<Area | null> {
    return getArea(Number(id))
  }
}