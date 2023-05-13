import { Sequelize } from 'sequelize-typescript';
import { Product } from './products/products.model';
import { Category } from './categories/categories.model';
import { Bakery } from './bakeries/models/bakeries.model';
import { User } from './accounts/users/users.model';
import { Seller } from './accounts/sellers/models/sellers.model';
import { Admin } from './accounts/admins/admins.model';
import { ApplicationsForBakeries } from './bakeries/models/applications-for-bakeries.model';
import { RequestMoney } from './accounts/sellers/models/request-money.model';
import { FeedbackOrder } from './feedbacks/models/feedbacks-order.model';
import { FeedbackProduct } from './feedbacks/models/feedbacks-product.model';

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host: '80.90.185.15',
          port: 5432,
          username: 'gen_user',
          password: 'g240uix0r6',
          database: 'default_db',
        });
        
        sequelize.addModels([
            User,
            Admin,
            Category,
            Product,
            Seller,
            RequestMoney,
            FeedbackOrder,
            FeedbackProduct,
            Bakery,
            ApplicationsForBakeries
        ]);
        await sequelize.sync();
        return sequelize;
      },
    },
    
  ];