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
};

export default config;
