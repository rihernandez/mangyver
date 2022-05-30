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
  public async getCauses(
    @Query() groupCode?: string,
    @Query() from?: number,
    @Query() top?: number,
  ): Promise<Array<Cause>> {
    let _from: number = Number(from);
    let _top: number = Number(top);
    if (isNaN(_from && _top)) {
    }
    _from > 0 ? (_from = _from - 1) : _from;
    return getCauses(groupCode, _from, _top);
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
