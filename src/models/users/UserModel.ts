import { knx } from "../../connections/knex";

export const User = {
  allUsers: async () => {
    const users = await knx.select("*").from("users");
    return users;
  },
};
