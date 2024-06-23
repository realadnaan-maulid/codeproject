import { IonButton,IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { ellipse, home, people, school ,call,mail,location,calendar, download} from 'ionicons/icons';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>John</IonTitle>
         <IonButtons slot='end'>
          <IonInput>
          </IonInput>
         </IonButtons>
        </IonToolbar>
      </IonHeader>
    <IonContent fullscreen>
    <div className='myhome'>
    <img src="tall guy.jpg_2000Wx3000H"/>
      </div>
      <div className='same'>
        <h1>Hi, I'm <br/>John</h1>
        <h4 className='h4'> Graphic designer</h4>
        <p>I jumped off a building and thought i was gonna land in water but to my suprise the water 
          was actually blue stained glass irl my friend pranked so badly im died also that's crazy </p>

          <p><IonIcon icon={call}></IonIcon>Phone number: +1 3189931371</p>
          <p><IonIcon icon={mail}></IonIcon>ion.noreply.com</p>
          <p><IonIcon icon={location}></IonIcon>My house</p>
          <p><IonIcon icon={calendar}></IonIcon>1 April 1800</p>

          <IonButton className='mybutton'>DOWNLOAD CV<IonIcon icon={download}></IonIcon></IonButton>
      </div>
      <div>
       
      </div>
      <div className='big'>
        <h1>How we Help Best!</h1>
       <div className='box'>
       <h4>Marketing</h4>
       <p>Idk anything about this!</p>
       <i>Learn more</i>
       </div>
       <div className='box'>
       <h4>Operation</h4>
       <p>Idk anything about this!</p>
       <i>Learn more</i>
       </div>
       <div className='box'>
       <h4>Strategy</h4>
       <p>Idk anything about this!</p>
       <i>Learn more</i>
       </div>

        

      </div>


    </IonContent>
    </IonPage>
  )}


export default Tab1;
