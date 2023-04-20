import { Sequelize } from 'sequelize-typescript';
import { Product } from './products/products.model';
import { Category } from './categories/categories.model';
import { Bakery } from './bakeries/bakeries.model';
import { User } from './accounts/users/users.model';
import { Seller } from './accounts/sellers/sellers.model';

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'mysql',
          host: '92.51.39.249',
          port: 3306,
          username: 'gen_user',
          password: 'n3bpiirpr6',
          database: 'default_db',
        });
        sequelize.addModels([
            // Product, 
            // Category, 
            // Bakery, 
            // User,
            Seller,
            Bakery,
        ]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];