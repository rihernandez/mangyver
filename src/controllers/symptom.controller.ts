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
    @Query() groupCode?: string,
    @Query() from?: number,
    @Query() top?: number,
    @Query() name?: string,
  ): Promise<Array<Symptom>> {
    let _from: number = Number(from);
    let _top: number = Number(top);
    if (isNaN(_from && _top)) {
    }
    _from > 0 ? (_from = _from - 1) : _from;
    return getSymptoms(groupCode, _from, _top, name);
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
