import { SCREENS } from '../../../constants';
import {
  AccountScreen,
  ChangePasswordScreen,
  PersonalInformationScreen,
  UserPostsScreen,
} from '../../../screens';
import UserDraftPostsScreen from '../../../screens/account/UserDraftPostsScreen';

const routes = [
  {
    component: AccountScreen,
    name: SCREENS.ACCOUNT,
  },
  {
    component: ChangePasswordScreen,
    name: SCREENS.CHANGE_PASSWORD,
  },
  {
    component: PersonalInformationScreen,
    name: SCREENS.PERSONAL_INFORMATION,
  },
  {
    component: UserPostsScreen,
    name: SCREENS.USER_POSTS,
  },
  {
    component: UserDraftPostsScreen,
    name: SCREENS.DRAFT_POSTS,
  },
];

export default routes;
