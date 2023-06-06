import { SCREENS } from '../../../constants';
import {
  ConfirmPostScreen,
  CreatePostScreen,
  UserPostsScreen,
} from '../../../screens';
import UserDraftPostsScreen from '../../../screens/account/UserDraftPostsScreen';

const routes = [
  {
    component: CreatePostScreen,
    name: SCREENS.CREATE_POST,
  },
  {
    component: ConfirmPostScreen,
    name: SCREENS.CONFIRM_POST_SCREEN,
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
