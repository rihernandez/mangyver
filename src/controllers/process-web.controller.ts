/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { Process } from "../models";
import {
  getProcesss,
  createProcess,
  IProcessPayload,
  getProcess,
  getProcesMobile,
} from "../repositories/process-web.repository";

@Route("process-web")
@Tags("ProcessWeb")
export default class ProcessController {
  @Get("/")
  public async getProceses(@Query() profile?: string): Promise<Array<Process>> {
    return getProcesss(profile);
  }

  // @Get("/mobile")
  // public async getProcesesMobile(
  //   @Query() profile?: string
  // ): Promise<Array<Process>> {
  //   return getProcesMobile(profile);
  // }

  @Post("/")
  public async createProcess(@Body() body: IProcessPayload): Promise<Process> {
    return createProcess(body);
  }

  @Get("/:id")
  public async getProcess(@Path() id: string): Promise<Process | null> {
    return getProcess(id);
  }
}
