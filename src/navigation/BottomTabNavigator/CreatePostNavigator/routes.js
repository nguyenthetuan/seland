import { SCREENS } from '../../../constants';
import { ConfirmPostScreen, CreatePostScreen } from '../../../screens';

const routes = [
  {
    component: CreatePostScreen,
    name: SCREENS.CREATE_POST,
  },
  {
    component: ConfirmPostScreen,
    name: SCREENS.CONFIRM_POST_SCREEN,
  },
];

export default routes;
