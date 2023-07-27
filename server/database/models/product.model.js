import connection from "../dbConection.js";
import { DataTypes } from "sequelize";
const productSchema = connection.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
  },

  description: {
    type: DataTypes.STRING(500),
  },

  price: {
    type: DataTypes.DECIMAL,
  },
});
connection.sync();
export default productSchema;
