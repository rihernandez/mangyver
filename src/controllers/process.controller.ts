import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Process} from '../models'
import {getProcesss, createProcess, IProcessPayload, getProcess} from '../repositories/process.repository'

@Route("processes")
@Tags("Process")
export default class ProcessController {
  @Get("/")
  public async getProceses(): Promise<Array<Process>> {
    return getProcesss()
  }

  @Post("/")
  public async createProcess(@Body() body: IProcessPayload): Promise<Process> {
    return createProcess(body)
  }

  @Get("/:id")
  public async getProcess(@Path() id: string): Promise<Process | null> {
    return getProcess(id)
  }
}
