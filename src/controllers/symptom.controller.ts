/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { Symptom } from "../models";
import {
  getSymptoms,
  createSymptom,
  ISymptomPayload,
  getSymptom,
} from "../repositories/symptom.repository";

@Route("symptoms")
@Tags("Symptom")
export default class SymptomController {
  @Get("/")
  public async getSymptoms(
    @Query() groupCode?: string
  ): Promise<Array<Symptom>> {
    return getSymptoms(groupCode);
  }

  @Post("/")
  public async createSymptom(@Body() body: ISymptomPayload): Promise<Symptom> {
    return createSymptom(body);
  }

  @Get("/:id")
  public async getSymptom(@Path() id: string): Promise<Symptom | null> {
    return getSymptom(id);
  }
}
/* eslint-disable */
