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
import DepositScreen from '../screens/account/DepositScreen/index';
import WarehouseLandScreen from '../screens/account/WarehouseLandScreen';
import DetailPostScreen from '../screens/home/DetailPostScreen';
import FilterScreen from '../screens/home/FilterScreen/screen/index';
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
  {
    component: FilterScreen,
    name: SCREENS.FILTER_SCREEN,
  },
  {
    component: DepositScreen,
    name: SCREENS.DEPOSIT_SCREEN,
  },
  {
    component: DetailPostScreen,
    name: SCREENS.DETAIL_POST,
  },
];

export default routes;
