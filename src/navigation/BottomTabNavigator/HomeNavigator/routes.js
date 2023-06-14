import { SCREENS } from '../../../constants';
import { HomeScreen, ListPostsScreen, MapScreen } from '../../../screens';
import ListProjectScreen from '../../../screens/home/ ListProjectScreen';
import DetailPostScreen from '../../../screens/home/DetailPostScreen';

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
  {
    component: DetailPostScreen,
    name: SCREENS.DETAIL_POST,
  },
];

export default routes;
