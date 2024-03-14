import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "..";

interface FAQAttributes {
  id: number;
  name: string;
}
interface FAQCreationAttributes extends Optional<FAQAttributes, "id"> {}

interface FAQInstance
  extends Model<FAQAttributes, FAQCreationAttributes>,
    FAQAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const FAQ = sequelize.define<FAQInstance>("FAQs", {
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

export default FAQ;
