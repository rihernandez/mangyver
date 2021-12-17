/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { LineMachine } from "../models";
import {
  getLineMachines,
  createLineMachine,
  ILineMachinePayload,
  getLineMachine,
} from "../repositories/line-machine.repository";

@Route("line-machines")
@Tags("LineMachine")
export default class LineMachineController {
  @Get("/")
  public async getLineMachines(
    @Query() lineId?: string,
    @Query() qskip?: number,
    @Query() qtake?: number
  ): Promise<Array<LineMachine>> {
    let skip: number = Number(qskip);
    let take: number = Number(qtake);
    if (isNaN(skip && take)) {
    }
    skip > 0 ? (skip = skip - 1) : skip;
    return getLineMachines(lineId, skip, take);
  }

  @Post("/")
  public async createLineMachine(
    @Body() body: ILineMachinePayload
  ): Promise<LineMachine> {
    return createLineMachine(body);
  }

  @Get("/:id")
  public async getLineMachine(@Path() id: string): Promise<LineMachine | null> {
    return getLineMachine(id);
  }
}
/* eslint-disable */
