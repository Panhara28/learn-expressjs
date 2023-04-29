import mysql from "mysql2";
import { settings } from "../routes/UserRoutes";
export const connection: any = mysql.createConnection(settings);
