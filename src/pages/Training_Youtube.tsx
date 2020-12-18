import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { apps, chatbubbleEllipses } from "ionicons/icons";
import React from "react";
import YouTube from "react-youtube";

import "./Training.css";

const Home = () => {
  return (
    <IonPage className="youTube_Page">
      <IonHeader>
        <IonToolbar className="toolHeader">
          <IonButtons slot="start">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={apps}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>News</IonTitle>

          <IonButtons slot="end">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={chatbubbleEllipses}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="youTube_Content">
        <div className="youTube_Div">
          <iframe
            width="350"
            height="270"
            src="https://www.youtube.com/embed/c6t3bW7kx6E"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

         <div className="youTube_Div">
          <iframe
            width="350"
            height="270"
            src="https://www.youtube.com/embed/c6t3bW7kx6E"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>               
      </IonContent>
    </IonPage>
  );
};

export default Home;
