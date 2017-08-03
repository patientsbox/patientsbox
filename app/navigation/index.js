import {StackNavigator,  DrawerNavigation} from 'react-navigation';

import Connexion from '../components/auth/connexion';
import Inscription from '../components/auth/inscription';
import TabsNavigation from './tabsnavigation';

import Calendrier from '../components/agenda/calendrier';
import RendezVous from '../components/agenda/rendezvous';
import Visualisation from '../components/agenda/visualisation';

import FichePatient from '../components/patient/fichepatient';


const StackNav = StackNavigator(
  {
    Connexion : {
      screen : Connexion
    },
    Home : {
      screen : TabsNavigation
    },
    Inscription : {
      screen : Inscription
    },
    RendezVous : {
      screen : RendezVous
    },
    Visualisation : {
      screen : Visualisation
    },
    FichePatient : {
      screen : FichePatient
    },
    Calendrier : {
      screen : Calendrier
    }
  },
);

export default StackNav;
