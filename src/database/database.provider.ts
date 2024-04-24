import { DataSource } from 'typeorm';
import dbToken from './datasource.token';

export const databaseProviders = [
  {
    provide: dbToken,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: './main.db',
        entities: [__dirname + '/../**/*.model{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
