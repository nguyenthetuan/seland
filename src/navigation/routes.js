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
import CollaboratorInformationScreen from '../screens/account/CollaboratorInformationScreen';
import DepositScreen from '../screens/account/DepositScreen/index';
import WarehouseLandScreen from '../screens/account/WarehouseLandScreen';
import AgencyInformationTab from './BottomTabNavigator/AgencyInformationNavigator';
import UpgradeAccountTab from './BottomTabNavigator/UpgradeAccountNavigator';
import DetailPostScreen from '../screens/home/DetailPostScreen';
import FilterScreen from '../screens/home/FilterScreen/screen/index';

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
    component: AgencyInformationTab,
    name: SCREENS.AGENCY_INFORMATION_TAB,
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
  {
    component: CollaboratorInformationScreen,
    name: SCREENS.COLLABORATOR_SCREEN,
  },
];

export default routes;
