/* eslint-disable */
/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Breakdown } from "../models";
import {
  getBreakdowns,
  createBreakdown,
  IBreakdownPayload,
  getBreakdown,
} from "../repositories/breakdown.repository";

@Route("breakdowns")
@Tags("Breakdown")
export default class BreakdownController {
  @Get("/")
  public async getBreakdowns(): Promise<Array<Breakdown>> {
    return getBreakdowns();
  }

  @Post("/")
  public async createBreakdown(
    @Body() body: IBreakdownPayload
  ): Promise<Breakdown> {
    return createBreakdown(body);
  }

  @Get("/:id")
  public async getBreakdown(@Path() id: string): Promise<Breakdown | null> {
    return getBreakdown(id);
  }
}
/* eslint-disable */
