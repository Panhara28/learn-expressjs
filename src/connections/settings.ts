import dotenv from "dotenv";
dotenv.config();
export const settings = {
  host: process.env.HOST,
  user: `${process.env.USERNAME}`,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

console.log(settings)