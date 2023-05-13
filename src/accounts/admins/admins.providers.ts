import { Admin } from "./admins.model";

export const adminsProviders = [
    {
      provide: 'ADMINS_REPOSITORY',
      useValue: Admin,
    },
  ];