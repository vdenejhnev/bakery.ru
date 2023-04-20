import { Bakery } from "./bakeries.model";

export const bakeryProviders = [
    {
      provide: 'BAKERIES_REPOSITORY',
      useValue: Bakery,
    },
  ];