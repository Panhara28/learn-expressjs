import { knx } from "../../connections/knex";

export const User = {
  allUsers: async () => {
    const users = await knx.select("*").from("users");
    return users;
  },
  userDetail: async (id: number) => {
    const user = await knx.select("*").from("users").where({ id }).first();
    return user;
  },
  signUp: async ({
    fullname,
    username,
    password,
  }: {
    fullname: string;
    username: string;
    password: string;
  }) => {
    const [signUp] = await knx.insert({ fullname, username, password });
    return signUp;
  },
};
