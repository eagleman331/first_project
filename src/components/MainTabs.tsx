import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { accessibilityOutline, chatbubbleOutline, ellipse, readerOutline, square, today, triangle } from 'ionicons/icons';
import News from '../pages/News';
import Bulletin from '../pages/Bulletin';
import Jobs from '../pages/Jobs';
import Home from '../pages/Training';
import Tab3 from '../pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const MainTabs = () => {
    return (
        <IonTabs>
        <IonRouterOutlet>
          <Route path="/News" component={News} exact={true} />
          <Route path="/Bulletin" component={Bulletin} exact={true} />
          <Route path="/Jobs" component={Jobs} />
          <Route path="/Home" component={Home} />
          <Route path="/" render={() => <Redirect to="/News" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="News" href="/News">
            <IonIcon icon={readerOutline} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tBulletin" href="/Bulletin">
            <IonIcon icon={today} />
            <IonLabel>Bulletin</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Jobs" href="/Jobs">
            <IonIcon icon={accessibilityOutline} />
            <IonLabel>Jobs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={chatbubbleOutline} />
            <IonLabel>Message</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    )
};

export default MainTabs;
