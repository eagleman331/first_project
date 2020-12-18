import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonIcon,
  IonList,
  IonButton,
  useIonViewWillEnter,
  IonButtons,
} from "@ionic/react";
import party from "../Media/party.jpg";
import "./News.css";
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
import { apps, chatbubbleEllipses, closeOutline } from "ionicons/icons";
import { Kid, getKids } from "../service/data.service";

const News: React.FC = () => {
  const [kids, setKids] = useState<Kid[]>([]);

  useIonViewWillEnter(() => {
    const kids = getKids();
    setKids(kids);
  });

  return (
    <IonPage>
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
              <IonIcon color="secondary" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
      >
        <IonList>
          {kids.map((kid, n) => (
            <IonCard color="light"
              key={n}
              routerLink={`/news/${kid.name}`}
              className="newsCard"
            >
              <IonCardContent>
                <img className="newsImage" src={kid.image} />
                <h2>Ang Aking Lobo</h2>
                <p>
                  ako ay lobo lumipad sa langit di ko na nakita lumobog na pla
                  sayang ang pera kop pang bili ng lon=bo makain sana nabusog pa
                  ako
                </p>
              </IonCardContent>
            </IonCard>
          ))}
          ;
        </IonList>
        <IonList>
        <IonCard>
              <IonCardContent>
                <img  src={party} />
                <h2>Ang Aking Lobo</h2>
                <p>
                  ako ay lobo lumipad sa langit di ko na nakita lumobog na pla
                  sayang ang pera kop pang bili ng lon=bo makain sana nabusog pa
                  ako
                </p>
              </IonCardContent>
            </IonCard>
          
          ;
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default News;
