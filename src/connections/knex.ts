import knex from "knex";
import { connection } from "./connection";

export const knx = knex({
  client: "mysql2",
  connection,
});
