import { Get, Route, Tags,  Post, Body, Path, Query } from "tsoa";
import {Deviation} from '../models'
import {getDeviations, createDeviation, IDeviationPayload, getDeviation} from '../repositories/deviation.repositoy'

@Route("deviations")
@Tags("Deviation")
export default class DeviationController {
  @Get("/")
  public async getDeviations(@Query() operation?: string): Promise<Array<Deviation>> {
    return getDeviations(operation)
  }

  @Post("/")
  public async createDeviation(@Body() body: IDeviationPayload): Promise<Deviation> {
    return createDeviation(body)
  }

  @Get("/:id")
  public async getDeviation(@Path() id: string): Promise<Deviation | null> {
    return getDeviation(id)
  }
}