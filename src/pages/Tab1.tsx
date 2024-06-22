import { IonButton,IonButtons, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
         <IonButtons slot='end'>
          <IonButton>Home</IonButton>
          <IonButton>School</IonButton>
          <IonButton>Profile</IonButton>

          <IonInput name='search'
            aria-label="Email" value="adnaan9659@gmail.com">
          </IonInput>
         </IonButtons>
        </IonToolbar>
      </IonHeader>
    <IonContent>
   
    </IonContent>
    </IonPage>
  )}


export default Tab1;
