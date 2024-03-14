import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "..";

interface BrandAttributes {
  id: number;
  name: string;
}
interface BrandCreationAttributes extends Optional<BrandAttributes, "id"> {}

interface BrandInstance
  extends Model<BrandAttributes, BrandCreationAttributes>,
    BrandAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Brand = sequelize.define<BrandInstance>("Brands", {
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

export default Brand;
