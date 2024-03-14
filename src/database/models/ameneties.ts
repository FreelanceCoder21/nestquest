import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "..";

interface AmenityAttributes {
  id: number;
  name: string;
}
interface AmenityCreationAttributes extends Optional<AmenityAttributes, "id"> {}

interface AmenityInstance
  extends Model<AmenityAttributes, AmenityCreationAttributes>,
    AmenityAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Amenity = sequelize.define<AmenityInstance>("Amenities", {
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

export default Amenity;
