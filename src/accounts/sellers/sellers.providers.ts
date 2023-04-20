import { Seller } from "./sellers.model";

export const sellersProviders = [
    {
      provide: 'SELLERS_REPOSITORY',
      useValue: Seller,
    },
  ];