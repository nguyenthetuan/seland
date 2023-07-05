import { SCREENS } from '../constants';
import {
  ChangePasswordScreen,
  CreateAppoinment,
  CreatePostScreen,
  ListPostsScreen,
  ListProjectScreen,
  MapScreen,
  PersonalInformationScreen,
  UserAppoinmentScreen,
  UserDraftPostsScreen,
  UserPostsScreen,
} from '../screens';
import AddAccountScreen from '../screens/account/AgencyInformationScreen/components/AddAccountScreen';
import ChangeStatusScreen from '../screens/account/AgencyInformationScreen/components/ChangeStatusScreen';
import StaffInformationScreen from '../screens/account/AgencyInformationScreen/components/StaffInformationScreen';
import CollaboratorInformationScreen from '../screens/account/CollaboratorInformationScreen';
import DepositScreen from '../screens/account/DepositScreen/index';
import PersonalPageScreen from '../screens/account/PersonalPageScreen';
import RequestContactScreen from '../screens/account/RequestContactScreen';
import WarehouseLandScreen from '../screens/account/WarehouseLandScreen';
import ConfirmPostScreen from '../screens/createPost/ConfirmPostScreen';
import DetailPostScreen from '../screens/home/DetailPostScreen';
import FilterScreen from '../screens/home/FilterScreen/screen/index';
import AgencyInformationTab from './BottomTabNavigator/AgencyInformationNavigator';
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
    component: AgencyInformationTab,
    name: SCREENS.AGENCY_INFORMATION_TAB,
  },
  {
    component: RequestContactScreen,
    name: SCREENS.REQUEST_CONTACT_SCREEN,
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
  {
    component: PersonalPageScreen,
    name: SCREENS.PERSONAL_PAGE_SCREEN,
  },
  {
    component: AddAccountScreen,
    name: SCREENS.ADD_ACCOUNT_SCREEN,
  },
  {
    component: ChangeStatusScreen,
    name: SCREENS.CHANGE_STATUS_SCREEN,
  },
  {
    component: StaffInformationScreen,
    name: SCREENS.STAFF_INFORMATION_SCREEN,
  },
  {
    component: CreatePostScreen,
    name: SCREENS.CREATE_POST,
  },
  {
    component: UserAppoinmentScreen,
    name: SCREENS.USERAPPOINMENTSCREEN,
  },
  {
    component: CreateAppoinment,
    name: SCREENS.CREATEAPPOIONMENTSCREEN,
  },
  {
    component: ConfirmPostScreen,
    name: SCREENS.CONFIRM_POST_SCREEN,
  },
];

export default routes;
