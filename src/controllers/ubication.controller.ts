/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Ubication } from "../models";
import {
  getUbication,
  getUbications,
  createUbication,
  IUbicationPayload,
} from "../repositories/ubication.repository";

@Route("ubications")
@Tags("Ubication")
export default class UbicationController {
  @Get("/")
  public async getUbications(): Promise<Array<Ubication>> {
    return getUbications();
  }

  @Post("/")
  public async createUbication(
    @Body() body: IUbicationPayload
  ): Promise<Ubication> {
    return createUbication(body);
  }

  @Get("/:id")
  public async getUbication(@Path() id: string): Promise<Ubication | null> {
    return getUbication(id);
  }
}
/* eslint-disable */
