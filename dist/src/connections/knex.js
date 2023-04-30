"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knx = void 0;
const knex_1 = __importDefault(require("knex"));
const settings_1 = require("./settings");
exports.knx = (0, knex_1.default)({
    client: "mysql2",
    connection: settings_1.settings,
});
