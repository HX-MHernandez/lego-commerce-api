import { DataSource } from "typeorm";
import { DATA_SOURCE } from "../common/constants";

export const databaseProviders = [{
  provide: DATA_SOURCE,
  useFactory: async () => {
    try {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
          // eslint-disable-next-line n/no-path-concat
          __dirname + '/../**/*.entity{.ts,.js}'
        ],
        synchronize: false
      });

      return dataSource.initialize();
    } catch (err) {
      throw new Error(err);
    }
  }
}];
