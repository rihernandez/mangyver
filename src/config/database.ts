import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();
import { Area, Notice } from "../models";
import { Bus } from "../models";
import { Equipment } from "../models";
import { Operation } from "../models";
import { Subarea } from "../models";
import { Ubication } from "../models";
import { User } from "../models";
import { Zone } from "../models";
import { Field } from "../models";
import { Section } from "../models";
import { Card } from "../models";
import { Component } from "../models";
import { Consecutive } from "../models";
import { Line } from "../models";
import { LineMachine } from "../models";
import { Priority } from "../models";
import { ProcessType } from "../models";
import { TypeFail } from "../models";
import { Process } from "../models";
import { Affect } from "../models"
dotenv.config();

const config: ConnectionOptions = {
  type: "mssql",
  host: process.env.MSSQL_HOST || "localhost",
  port: Number(process.env.MSSQL_PORT) || 5432,
  username: process.env.MSSQL_USER || "admin",
  password: process.env.MSSQL_PASSWORD || "1234",
  database: process.env.MSSQL_DB || "fixmaint",
  entities: [
    User, Zone, Bus, Ubication, Subarea, Operation, 
    Equipment, Area, Notice, Field, Section, Card, Component,
    Consecutive,Line,LineMachine,Priority, Process, ProcessType,
    TypeFail, Affect
  ],
  synchronize: true,
};

export default config;
