import path from "path";
import { settings } from "./src/connections/settings";

const config = {
  development: {
    client: "mysql2",
    connection: settings,
    migrations: {
      directory: path.join(__dirname, "src", "schema", "migrations"),
    },
  },
  //   production: {
  //     client: "mysql2",
  //     connection: {
  //       host: process.env.DB_HOST,
  //       user: process.env.DB_USER,
  //       password: process.env.DB_PASSWORD,
  //       database: process.env.DB_NAME,
  //       port: parseInt(process.env.DB_PORT || "3306"),
  //     },
  //     migrations: {
  //       directory: path.join(__dirname, "src", "database", "migrations"),
  //     },
  //   },
};

export default config;
