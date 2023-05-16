import {
  AccountScreen,
  ChangePasswordScreen,
  PersonalInformationScreen,
  UserPostsScreen,
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
  {
    component: UserPostsScreen,
    name: 'UserPosts',
  },
];

export default routes;
