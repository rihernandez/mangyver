/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { Process } from "../models";
import {
  getProcesss,
  createProcess,
  IProcessPayload,
  getProcess,
  getProcesMobile,
  getProcessWeb,
} from "../repositories/process.repository";

@Route("processes")
@Tags("Process")
export default class ProcessController {
  @Get("/")
  public async getProceses(@Query() profile?: string): Promise<Array<Process>> {
    return getProcesss(profile);
  }

  @Get("/web")
  public async getProcesesWeb(
    @Query() profile?: string
  ): Promise<Array<Process>> {
    return getProcessWeb(profile);
  }

  @Post("/")
  public async createProcess(@Body() body: IProcessPayload): Promise<Process> {
    return createProcess(body);
  }

  @Get("/:id")
  public async getProcess(@Path() id: string): Promise<Process | null> {
    return getProcess(id);
  }
}
/* eslint-disable */
