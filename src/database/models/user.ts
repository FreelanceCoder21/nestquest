import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "..";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  location: number;
  cityId: string;
  ipAddress: string;
  phoneNo: string;
  deviceId: string;
  role: string;
  otp: number;
  jwt: string;
}

interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    | "id"
    | "name"
    | "email"
    | "location"
    | "cityId"
    | "ipAddress"
    | "deviceId"
    | "role"
    | "otp"
    | "jwt"
  > {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Cities", // Reference to the City model
      key: "id", // Reference to the primary key in the City model
    },
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deviceId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  jwt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
