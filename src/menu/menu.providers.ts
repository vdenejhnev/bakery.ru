import { Menu } from "./models/menu.model";

const menuProviders = [
    {
        provide: 'MENU_REPOSITORY',
        useValue: Menu,
    },
];

export default menuProviders