import AccountNavigator from './AccountNavigator';
import CreatePostNavigator from './CreatePostNavigator';
import HistoryNavigator from './HistoryNavigator';
import HomeNavigator from './HomeNavigator';
import ManagePostNavigator from './ManagePostNavigator';

const routes = [
  {
    name: 'HomeNavigator',
    component: HomeNavigator,
  },
  {
    name: 'HistoryNavigator',
    component: HistoryNavigator,
  },
  {
    name: 'CreatePostNavigator',
    component: CreatePostNavigator,
  },
  {
    name: 'ManagePostNavigator',
    component: ManagePostNavigator,
  },
  {
    name: 'AccountNavigator',
    component: AccountNavigator,
  },
];

export default routes;
