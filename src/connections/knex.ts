import knex from "knex";
import { settings } from "./settings";

export const knx = knex({
  client: "mysql2",
  connection: settings,
});
