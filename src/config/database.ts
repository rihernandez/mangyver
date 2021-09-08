import { Menu, MenuRole, SubAreaMachine } from '../models';
import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();
import { Area } from "../models";
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
import { Affect } from "../models";
import { Breakdown } from "../models";
import { Notice } from "../models";
import { Role } from "../models";

dotenv.config();

const config: ConnectionOptions = {
  type: "mssql",
  host: process.env.MSSQL_HOST || process.env.HOST,
  port: Number(process.env.MSSQL_PORT) || Number(process.env.PORT),
  username: process.env.MSSQL_USER || process.env.USER,
  password: process.env.MSSQL_PASSWORD || process.env.PASSWORD,
  database: process.env.MSSQL_DB || process.env.DB,
  entities: [
    User, Zone, Bus, Ubication, Subarea, Operation, 
    Equipment, Area, Field, Section, Card, Component,
    Consecutive,Line,LineMachine,Priority, Process, ProcessType,
    TypeFail, Affect,Breakdown, Notice, Role, SubAreaMachine, Menu, MenuRole
  ],
  synchronize: true,
};

export default config;
