import { RequestMoney } from "./models/request-money.model";
import { Seller } from "./models/sellers.model";

export const sellersProviders = [
    {
      provide: 'SELLERS_REPOSITORY',
      useValue: Seller,
    },
    {
      provide: 'REQUEST-MONEY_REPOSITORY',
      useValue: RequestMoney,
    },
  ];