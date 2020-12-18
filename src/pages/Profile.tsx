import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { apps, chatbubbleEllipses, notifications } from "ionicons/icons";
import "./Login.css";
import couple from "../Media/couple.jpg";

const Training = () => {
  return (
    <IonPage>
      <IonHeader >

      <IonToolbar className="toolHeader">
          <IonButtons slot="start">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={apps}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>Training</IonTitle>

          <IonButtons slot="end">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={chatbubbleEllipses}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ionContent_Login">
        <IonCard>
          <IonThumbnail  >
            <img src={couple}/>
          </IonThumbnail>
          <IonCardHeader>
            <IonCardTitle>Basic Formation</IonCardTitle>
          </IonCardHeader>
          <IonCardContent >
            
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Training;
