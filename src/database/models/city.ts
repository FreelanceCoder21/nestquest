import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "..";

interface CityAttributes {
  id: number;
  name: string;
}
interface CityCreationAttributes extends Optional<CityAttributes, "id"> {}

interface CityInstance
  extends Model<CityAttributes, CityCreationAttributes>,
    CityAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const City = sequelize.define<CityInstance>("Cities", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default City;
