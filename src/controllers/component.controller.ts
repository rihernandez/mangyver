import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Component} from '../models'
import {getComponents, createComponent, IComponentPayload, getComponent} from '../repositories/component.repository'

@Route("components")
@Tags("Component")
export default class ComponentController {
  @Get("/")
  public async getComponents(): Promise<Array<Component>> {
    return getComponents()
  }

  @Post("/")
  public async createComponent(@Body() body: IComponentPayload): Promise<Component> {
    return createComponent(body)
  }

  @Get("/:id")
  public async getComponent(@Path() id: string): Promise<Component | null> {
    return getComponent(Number(id))
  }
}
