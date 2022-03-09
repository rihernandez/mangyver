/* eslint-disable */

import { getConnection } from "typeorm";

export const getForm = async (userId?: string) => {
  const connection = getConnection();
  const result = await connection.query(
    "SP_NoticeFormMobil @userid='" + userId + "'"
  );

  return result;
};
