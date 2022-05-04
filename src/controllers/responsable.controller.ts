/* eslint-disable */
/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { Responsable } from "../models";
import {
  getResponsable,
  getResponsables,
  createResponsable,
  IResponsablePayload,
} from "../repositories/responsable.repository";

@Route("responsables")
@Tags("Responsable")
export default class ResponsableController {
  @Get("/")
  public async getResponsables(
    @Query() operation?: string
  ): Promise<Array<Responsable>> {
    return getResponsables(operation);
  }

  @Post("/")
  public async createResponsable(
    @Body() body: IResponsablePayload
  ): Promise<Responsable> {
    return createResponsable(body);
  }

  @Get("/:id")
  public async getResponsable(@Path() id: string): Promise<Responsable | null> {
    return getResponsable(id);
  }
}
/* eslint-disable */
