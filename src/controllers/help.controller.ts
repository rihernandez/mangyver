/* eslint-disable */
/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Help } from "../models";
import {
  getAllHelps,
  createHelp,
  IHelpPayload,
  getHelp,
} from "../repositories/help.repository";

@Route("helps")
@Tags("Help")
export default class HelpController {
  @Get("/")
  public async getAllHelps(): Promise<Array<Help>> {
    return getAllHelps();
  }

  @Post("/")
  public async createHelp(@Body() body: IHelpPayload): Promise<Help> {
    return createHelp(body);
  }

  @Get("/:id")
  public async getHelp(@Path() id: string): Promise<Help | null> {
    return getHelp(id);
  }
}
/* eslint-disable */
