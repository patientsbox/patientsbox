import {StackNavigator,  DrawerNavigation} from 'react-navigation';

import Connexion from '../components/auth/connexion';
import Inscription from '../components/auth/inscription';
import TabsNavigation from './tabsnavigation';

const StackNav = StackNavigator(
  {
    Connexion : {
      screen : Connexion
    },
    Inscription : {
      screen : Inscription
    },
    Home : {
      screen : TabsNavigation
    }
  },
);

export default StackNav;
