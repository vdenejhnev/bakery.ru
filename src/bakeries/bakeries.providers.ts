import { ApplicationsForBakeries } from "./models/applications-for-bakeries.model";
import { Bakery } from "./models/bakeries.model";

export const bakeryProviders = [
  {
    provide: 'BAKERIES_REPOSITORY',
    useValue: Bakery,
  },
  {
    provide: 'APPLICATIONS-FOR-BAKERIES_REPOSITORY',
    useValue: ApplicationsForBakeries,
  },
];