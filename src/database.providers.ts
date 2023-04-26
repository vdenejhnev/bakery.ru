import { Sequelize } from 'sequelize-typescript';
import { Product } from './products/products.model';
import { Category } from './categories/categories.model';
import { Bakery } from './bakeries/models/bakeries.model';
import { User } from './accounts/users/users.model';
import { Seller } from './accounts/sellers/models/sellers.model';
import { Admin } from './accounts/admins/admins.model';
import { ApplicationsForBakeries } from './bakeries/models/applications-for-bakeries.model';
import { RequestMoney } from './accounts/sellers/models/request-money.model';
import { Menu } from './menu/models/menu.model';
import { MenuCategories } from './menu/models/menu-categories.model';

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
            User,
            Admin,
            Category,
            Product,
            Seller,
            RequestMoney,
            Bakery,
            Menu,
            MenuCategories,
            ApplicationsForBakeries
        ]);
        await sequelize.sync();
        return sequelize;
      },
    },
    
  ];