import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("nestquest", "root", "root", {
  host: "localhost",
  dialect: "postgres",
});
