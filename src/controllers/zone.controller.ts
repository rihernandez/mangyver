import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Zone} from '../models'
import {getZones, createZone, IZonePayload, getZone} from '../repositories/zone.repository'

@Route("zones")
@Tags("Zone")
export default class ZoneController {
  @Get("/")
  public async getZones(): Promise<Array<Zone>> {
    return getZones()
  }

  @Post("/")
  public async createZone(@Body() body: IZonePayload): Promise<Zone> {
    return createZone(body)
  }

  @Get("/:id")
  public async getZone(@Path() id: string): Promise<Zone | null> {
    return getZone(id)
  }
}
