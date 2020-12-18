import {
    IonButton,
    IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import YouTube from 'react-youtube';

import party from "../Media/party.jpg";

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

/* Theme variables */
import "../theme/variables.css";
import "./Training.css";
import { apps, chatbubbleEllipses, closeOutline, skullOutline } from "ionicons/icons";

const Training = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={skullOutline}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>Training</IonTitle>

          <IonButtons slot="end">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <div className="news_IonContent">

        <div className="tCard">
          <IonCard color="light" className="trainingCard">
              <img src={party} className="trainingCard_Img" />
            
           
            <IonCardHeader className="trainingCard_Header">
              <IonCardTitle className="ionCard_Title">Train</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <IonCard color="light" className="trainingCard">
              <img src={party} className="trainingCard_Img" />
            
           
            <IonCardHeader className="trainingCard_Header">
              <IonCardTitle className="ionCard_Title">Train</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>

        <div className="tCard">
          <IonCard color="light" className="trainingCard">
              <img src={party} className="trainingCard_Img" />
            
           
            <IonCardHeader className="trainingCard_Header">
              <IonCardTitle className="ionCard_Title">Train</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <IonCard color="light" className="trainingCard">
              <img src={party} className="trainingCard_Img" />
            
           
            <IonCardHeader className="trainingCard_Header">
              <IonCardTitle className="ionCard_Title">Train</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>

        <div className="tCard">
          <IonCard color="light" className="trainingCard">
              <img src={party} className="trainingCard_Img" />
            
           
            <IonCardHeader className="trainingCard_Header">
              <IonCardTitle className="ionCard_Title">Train</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <IonCard color="light" className="trainingCard">
              <img src={party} className="trainingCard_Img" />
            
           
            <IonCardHeader className="trainingCard_Header">
              <IonCardTitle className="ionCard_Title">Train</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>
        
       
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Training;
