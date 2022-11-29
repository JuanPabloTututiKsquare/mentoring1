import { Sequelize } from "sequelize";
import { initUserModel } from "./user/model/User.model";

export interface ConnectionInterface {
    db_name: string;
    db_username: string;
    db_password: string;
    db_host: string;
}

const models = [initUserModel]

export const DBConnection = async (Connection: ConnectionInterface) => {
    const sequelize = new Sequelize(
        Connection.db_name,
        Connection.db_username,
        Connection.db_password,
        {
            host: Connection.db_host,
            dialect: "postgres",
        }
    )

    for (const model of models) {
        await model(sequelize);
    }

    await sequelize.sync({force: false});

    return sequelize;
}

