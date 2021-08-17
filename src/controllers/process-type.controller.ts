import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {ProcessType} from '../models'
import {getProcessTypes, createProcessType, IProcessTypePayload, getProcessType} from '../repositories/process-type.repository'

@Route("process-types")
@Tags("ProcessType")
export default class ProcessTypeController {
  @Get("/")
  public async getProcessTypes(): Promise<Array<ProcessType>> {
    return getProcessTypes()
  }

  @Post("/")
  public async createProcessType(@Body() body: IProcessTypePayload): Promise<ProcessType> {
    return createProcessType(body)
  }

  @Get("/:id")
  public async getProcessType(@Path() id: string): Promise<ProcessType | null> {
    return getProcessType(Number(id))
  }
}
