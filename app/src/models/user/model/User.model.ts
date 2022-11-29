import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: number;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare is_deleted: CreationOptional<boolean>;
}

export const initUserModel = async(sequelize: Sequelize) => {
    await User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            tableName: "user",
            sequelize: sequelize
        }
    )
    await User.sync();
}