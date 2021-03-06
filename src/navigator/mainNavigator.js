import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile47288Navigator from '../features/UserProfile47288/navigator';
import Tutorial47287Navigator from '../features/Tutorial47287/navigator';
import NotificationList47259Navigator from '../features/NotificationList47259/navigator';
import Settings47258Navigator from '../features/Settings47258/navigator';
import Settings47250Navigator from '../features/Settings47250/navigator';
import UserProfile47248Navigator from '../features/UserProfile47248/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile47288: { screen: UserProfile47288Navigator },
Tutorial47287: { screen: Tutorial47287Navigator },
NotificationList47259: { screen: NotificationList47259Navigator },
Settings47258: { screen: Settings47258Navigator },
Settings47250: { screen: Settings47250Navigator },
UserProfile47248: { screen: UserProfile47248Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
