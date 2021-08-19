import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Consecutive} from '../models'
import {getConsecutives, createConsecutive, IConsecutivePayload, getConsecutive} from '../repositories/consecutive.repository'

@Route("consecutives")
@Tags("Consecutive")
export default class ConsecutiveController {
  @Get("/")
  public async getConsecutives(): Promise<Array<Consecutive>> {
    return getConsecutives()
  }

  @Post("/")
  public async createConsecutive(@Body() body: IConsecutivePayload): Promise<Consecutive> {
    return createConsecutive(body)
  }

  @Get("/:id")
  public async getConsecutive(@Path() id: string): Promise<Consecutive | null> {
    return getConsecutive(id)
  }
}
