import { Sequelize } from "sequelize";

const connection = new Sequelize("crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
