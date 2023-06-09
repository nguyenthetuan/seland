import { SCREENS } from '../constants';
import {
  ChangePasswordScreen,
  ListPostsScreen,
  ListProjectScreen,
  MapScreen,
  PersonalInformationScreen,
  UserDraftPostsScreen,
  UserPostsScreen,
} from '../screens';
import WarehouseLandScreen from '../screens/account/WarehouseLandScreen';
import UpgradeAccountTab from './BottomTabNavigator/UpgradeAccountNavigator';

const routes = [
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
  {
    component: ListPostsScreen,
    name: SCREENS.LIST_POSTS,
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
    component: UpgradeAccountTab,
    name: SCREENS.UPGRADE_ACCOUNT_TAB,
  },
  {
    component: WarehouseLandScreen,
    name: SCREENS.WAREHOUSELAND,
  },
];

export default routes;
