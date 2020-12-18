import React from "react";
import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSlide,
  IonSlides,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonBadge,
  IonToolbar,
  IonAvatar,
  IonButtons,
  IonButton,
  IonItemDivider,
  IonChip,
} from "@ionic/react";
import {
  ellipse,
  square,
  triangle,
  wine,
  chatbubbleEllipses,
  thumbsUpSharp,
  apps,
  notifications,
  closeOutline,
} from "ionicons/icons";
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

import biim from "../Media/biim.jpeg";
import couple from "../Media/couple.jpg";
import party from "../Media/party.jpg";
import "./Bulletin.css";

const Bulletin = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolHeader">
          <IonButtons slot="start">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={apps}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>Bulletin</IonTitle>

          <IonButtons slot="end">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent class="slides ion-margin-bottom">
        <IonSlides>
          <IonSlide>
            <IonCard color="light" button={true} className="bulletinCard">
              <IonCardHeader>
                <IonCardTitle>Recruitment</IonCardTitle>
                <IonCardSubtitle>Soldier</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent class="ion-text-left">
              
                <img src={party} />
                <IonItem>
                  <IonCardSubtitle>Desciption</IonCardSubtitle>
                  <IonText>loreisdfdsfdsaffffffffaaa</IonText>
                  <IonCardSubtitle>Desciption</IonCardSubtitle>
                  <IonText>loreisdf</IonText>
                </IonItem>
                <IonItem>
                  <IonButton>
                    <IonLabel>Learn More</IonLabel>
                  </IonButton>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard color="light" button={true} className="bulletinCard">
              <IonCardHeader>
                <IonCardTitle>Recruitment</IonCardTitle>
                <IonCardSubtitle>Soldier</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent class="ion-text-left">
              
                <img src={party} />
                <IonItem>
                  <IonCardSubtitle>Desciption</IonCardSubtitle>
                  <IonText>loreisdfdsfdsaffffffffaaa</IonText>
                  <IonCardSubtitle>Desciption</IonCardSubtitle>
                  <IonText>loreisdf</IonText>
                </IonItem>
                <IonItem>
                  <IonButton>
                    <IonLabel>Learn More</IonLabel>
                  </IonButton>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard color="light" button={true} className="bulletinCard">
              <IonCardHeader>
                <IonCardTitle>Recruitment</IonCardTitle>
                <IonCardSubtitle>Soldier</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent class="ion-text-left">
              
                <img src={party} />
                <IonItem>
                  <IonCardSubtitle>Desciption</IonCardSubtitle>
                  <IonText>loreisdfdsfdsaffffffffaaa</IonText>
                  <IonCardSubtitle>Desciption</IonCardSubtitle>
                  <IonText>loreisdf</IonText>
                </IonItem>
                <IonItem>
                  <IonButton>
                    <IonLabel>Learn More</IonLabel>
                  </IonButton>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          
          
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Bulletin;
