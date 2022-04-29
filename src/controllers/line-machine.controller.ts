/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { LineMachine } from "../models";
import {
  getLineMachines,
  createLineMachine,
  ILineMachinePayload,
  getLineMachine,
} from "../repositories/line-machine.repository";

@Route("machines")
@Tags("LineMachine")
export default class LineMachineController {
  @Get("/")
  public async getLineMachines(
    @Query() lineId?: string,
    @Query() from?: number,
    @Query() top?: number,
    @Query() name?: string,
    @Query() SAPCode?: string,
  ): Promise<Array<LineMachine>> {
    let _from: number = Number(from);
    let _top: number = Number(top);
    if (isNaN(_from && _top)) {
    }
    _from > 0 ? (_from = _from - 1) : _from;
    return getLineMachines(lineId, _from, _top, name, SAPCode);
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
