/* eslint-disable */
/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Bus } from "../models";
import {
  getAllBus,
  createBus,
  IBusPayload,
  getBus,
} from "../repositories/bus.repository";

@Route("buses")
@Tags("Bus")
export default class BusController {
  @Get("/")
  public async getAllBus(): Promise<Array<Bus>> {
    return getAllBus();
  }

  @Post("/")
  public async createBus(@Body() body: IBusPayload): Promise<Bus> {
    return createBus(body);
  }

  @Get("/:id")
  public async getBus(@Path() id: string): Promise<Bus | null> {
    return getBus(id);
  }
}
/* eslint-disable */
