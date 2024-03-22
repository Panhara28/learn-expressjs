"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const settings_1 = require("./src/connections/settings");
const config = {
    development: {
        client: "mysql2",
        connection: settings_1.settings,
        migrations: {
            directory: path_1.default.join(__dirname, "src", "schema", "migrations"),
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
exports.default = config;
