import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { Route, RouteComponentProps } from 'react-router'

interface JobsDetailViewProps extends RouteComponentProps<{name: string}>{

}

const JobsDetailView: React.FC<JobsDetailViewProps> = ({match}) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Job Detail View</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {match.params.name}
            </IonContent>
        </IonPage>
    )
}

export default JobsDetailView
