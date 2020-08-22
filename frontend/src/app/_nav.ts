import {INavData} from '@coreui/angular';
import {NavEnum} from "./_nav-enum";

export const navItems: INavData[] = [
  {
    name: NavEnum.Dashboard,
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Gestion de personnes'
  },
  {
    name: NavEnum.Utilisateurs,
    url: '/personnes/utilisateurs',
    icon: 'fa fa-user-o'
  },
  {
    name: NavEnum.Credits,
    url: 'https://coreui.io/',
    icon: 'icon-info'
  },
];
