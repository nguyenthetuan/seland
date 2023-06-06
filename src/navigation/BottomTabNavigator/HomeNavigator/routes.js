import { SCREENS } from '../../../constants';
import { HomeScreen, ListPostsScreen, MapScreen } from '../../../screens';
import ListProjectScreen from '../../../screens/home/ ListProjectScreen';

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
  {
    component: ListProjectScreen,
    name: SCREENS.LIST_PROJECT,
  },
];

export default routes;
