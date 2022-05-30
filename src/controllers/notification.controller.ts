/* eslint-disable */
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
    @Query() top?: unknown,
    @Query() from?: unknown,
    @Query() dateFrom?: unknown,
    @Query() dateEnd?: unknown,
    @Query() sapForm?: unknown
  ): Promise<Array<Notification>> {
    return getNotifications(
      profileId,
      Number(top || 0),
      Number(from || 0),
      String(dateFrom || "19000101"),
      String(dateEnd || "19000101"),
      Boolean(sapForm || 0)
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
