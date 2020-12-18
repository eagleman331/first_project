import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { Route, RouteComponentProps } from 'react-router'

interface NewsDetailViewProps extends RouteComponentProps<{name: string}>{

}

const NewsDetailView: React.FC<NewsDetailViewProps> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>News Detail View</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {match.params.name}
            </IonContent>
        </IonPage>
    )
}

export default NewsDetailView
