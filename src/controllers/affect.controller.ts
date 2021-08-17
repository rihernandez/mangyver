import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Affect} from '../models'
import {getAffects, createAffect, IAffectPayload, getAffect} from '../repositories/affect.repository'

@Route("affects")
@Tags("Affect")
export default class AffectController {
  @Get("/")
  public async getAffects(): Promise<Array<Affect>> {
    return getAffects()
  }

  @Post("/")
  public async createAffect(@Body() body: IAffectPayload): Promise<Affect> {
    return createAffect(body)
  }

  @Get("/:id")
  public async getAffect(@Path() id: string): Promise<Affect | null> {
    return getAffect(Number(id))
  }
}
