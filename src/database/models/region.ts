import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "..";

interface RegionAttributes {
  id: number;
  name: string;
  cityId: number;
}
interface RegionCreationAttributes extends Optional<RegionAttributes, "id"> {}

interface RegionInstance
  extends Model<RegionAttributes, RegionCreationAttributes>,
    RegionAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Region = sequelize.define<RegionInstance>("Regions", {
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
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Cities", // Reference to the City model
      key: "id", // Reference to the primary key in the City model
    },
  },
});

export default Region;
