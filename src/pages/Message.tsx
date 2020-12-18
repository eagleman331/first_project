import { IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const Message = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonText>Message</IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonText>Sorry</IonText>
          
        </IonItem>
        <IonItem>
        <IonText>Still on Development</IonText>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Message;
