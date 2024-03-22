import dotenv from "dotenv";
dotenv.config();
export const settings = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};