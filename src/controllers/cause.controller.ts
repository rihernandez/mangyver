/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { Cause } from "../models";
import {
  getCauses,
  createCause,
  ICausePayload,
  getCause,
} from "../repositories/cause.repository";

@Route("causes")
@Tags("Cause")
export default class CauseController {
  @Get("/")
  public async getCauses(@Query() groupCode?: string): Promise<Array<Cause>> {
    return getCauses(groupCode);
  }

  @Post("/")
  public async createCause(@Body() body: ICausePayload): Promise<Cause> {
    return createCause(body);
  }

  @Get("/:id")
  public async getCause(@Path() id: string): Promise<Cause | null> {
    return getCause(id);
  }
}
/* eslint-disable */
