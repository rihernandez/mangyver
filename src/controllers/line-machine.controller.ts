import { Get, Route, Tags,  Post, Body, Path, Query } from "tsoa";
import {LineMachine} from '../models'
import {getLineMachines, createLineMachine, ILineMachinePayload, getLineMachine} from '../repositories/line-machine.repository'

@Route("line-machines")
@Tags("LineMachine")
export default class LineMachineController {
  @Get("/")
  public async getLineMachines(@Query() lineId?: string): Promise<Array<LineMachine>> {
    return getLineMachines(lineId)
  }

  @Post("/")
  public async createLineMachine(@Body() body: ILineMachinePayload): Promise<LineMachine> {
    return createLineMachine(body)
  }

  @Get("/:id")
  public async getLineMachine(@Path() id: string): Promise<LineMachine | null> {
    return getLineMachine(id)
  }
}
