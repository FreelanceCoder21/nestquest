import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "..";

interface LocationAttributes {
  id: number;
  name: string;
  cityId: number;
  regionId: number;
}
interface LocationCreationAttributes
  extends Optional<LocationAttributes, "id"> {}

interface LocationInstance
  extends Model<LocationAttributes, LocationCreationAttributes>,
    LocationAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Location = sequelize.define<LocationInstance>("Locations", {
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
  regionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Regions", // Reference to the City model
      key: "id", // Reference to the primary key in the City model
    },
  },
});

export default Location;
