import { SCREENS } from '../../../constants';
import { HomeScreen, ListPostsScreen, MapScreen } from '../../../screens';

const routes = [
  {
    component: HomeScreen,
    name: 'Home',
  },
  {
    component: ListPostsScreen,
    name: 'ListPosts',
  },
  {
    component: MapScreen,
    name: SCREENS.MAPS,
  },
];

export default routes;
