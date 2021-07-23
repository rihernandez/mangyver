import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Equipment} from '../models'
import {getEquipment, getEquipments, createEquipment, IEquipmentPayload} from '../repositories/equipment.repository'

@Route("equipments")
@Tags("Equipment")
export default class EquipmentController {
  @Get("/")
  public async getEquipments(): Promise<Array<Equipment>> {
    return getEquipments();
  }

  @Post("/")
  public async createEquipment(@Body() body: IEquipmentPayload): Promise<Equipment> {
    return createEquipment(body)
  }

  @Get("/:id")
  public async getEquipment(@Path() id: string): Promise<Equipment | null> {
    return getEquipment(Number(id))
  }
}