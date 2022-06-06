/* eslint-disable */
import { query } from "express";
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { Notification } from "../models";
import {
  getNotifications,
  createNotification,
  INotificationPayload,
  getNotification,
} from "../repositories/notification.repository";

@Route("notifications")
@Tags("Notification")
export default class NotificationController {
  @Get("/")
  public async getNotifications(
    @Query() profileId: string,
    @Query() top: number,
    @Query() from: number,
    @Query() dateFrom: string,
    @Query() dateEnd: string,
    @Query() sapForm: boolean,
    @Query() isWeb: boolean
  ): Promise<Array<Notification>> {
    console.log(profileId, top, from, dateFrom, dateEnd, sapForm, isWeb);
    return getNotifications(
      profileId,
      top,
      from,
      dateFrom,
      dateEnd,
      sapForm,
      isWeb
    );
  }

  @Post("/")
  public async createNotification(
    @Body() body: INotificationPayload
  ): Promise<Notification> {
    return createNotification(body);
  }

  @Get("/:id")
  public async getNotification(
    @Path() id: string
  ): Promise<Notification | null> {
    return getNotification(id);
  }
}
/* eslint-disable */
