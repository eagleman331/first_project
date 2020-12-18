import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonAvatar,
  IonChip,
  IonThumbnail,
  IonButtons,
  IonBadge,
  IonItemDivider,
  IonText,
} from "@ionic/react";
import { heart, share, chatbubbleEllipses, apps, closeOutline } from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

import biim from "../Image/biim.jpeg";
import couple from "../Image/couple.jpg";
import party from "../Image/party.jpg";
import { Kid, getKids } from "../service/data.service";
import "./Jobs.css";

const Jobs = () => {
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

          <IonTitle>Jobs</IonTitle>
          <IonButtons slot="end">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="secondary" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {kids.map((kid, n) => (
            <IonCard key={n} routerLink={`/jobs/${kid.name}`}>
              <IonCardContent className="jobsCard">
                <IonItemDivider className="jobsImage-label">
                  <IonItem className="jobsImg">
                    {kid.image && (
                      <IonThumbnail>
                        <img alt="avatar" src={kid.image} />
                      </IonThumbnail>
                    )}
                  </IonItem>
                  <IonItem className="jobsLabel">
                    <IonLabel>
                      <h2>{kid.name}</h2>
                      <p>Goal: {kid.goal}</p>
                    </IonLabel>
                  </IonItem>
                </IonItemDivider>
              </IonCardContent>
            </IonCard>
          ))}
          ;
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Jobs;
