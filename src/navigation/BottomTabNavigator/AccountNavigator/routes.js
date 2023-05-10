import {
  AccountScreen,
  ChangePasswordScreen,
  PersonalInformationScreen,
} from '../../../screens';

const routes = [
  {
    component: AccountScreen,
    name: 'Account',
  },
  {
    component: ChangePasswordScreen,
    name: 'ChangePassword',
  },
  {
    component: PersonalInformationScreen,
    name: 'PersonalInformation',
  },
];

export default routes;
