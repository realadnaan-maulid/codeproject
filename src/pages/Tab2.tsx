import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { ellipse, home, people, school,mail,location,call,logoFacebook,logoInstagram,logoPinterest,logoLinkedin} from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marketing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className='h1'>Get in Touch
        <p>Hello there, How are you? I'm great I hope you are doing good 🤣</p>
        <h4 className='h4'><IonIcon icon={mail}></IonIcon>Chart to us</h4>
        <p>Our team is here to help ya!<br/>
          idk@code.com
        </p>
        <h4 className='h4'><IonIcon icon={location}></IonIcon>Office</h4>
        <p>Come say hello to our office agents!</p>
        <p>121 Rock Street, 21 Avenue</p>
        <p>New York, NY 92103-9000</p>
        <h4 className='h4'><IonIcon icon={call}></IonIcon>Phone</h4>
        <p>Mon-Fri from 8am to 5pm <br/>
        +1 5050550505
        </p>
        <IonIcon icon={logoFacebook}></IonIcon>
        <IonIcon icon={logoInstagram}></IonIcon>
        <IonIcon icon={logoLinkedin}></IonIcon>
        <IonIcon icon={logoPinterest}></IonIcon>
      </div>
      <div className='ritr'>Level up your brand
        <p>You can reach us at via email at idk@code.com</p>

        <IonRow slot='bottom'>

          <IonCol size='5'>
            Name
          </IonCol>

          <IonCol size='5'>
            Email
          </IonCol>
          
        </IonRow>
        
        <input type='name'></input>
        <input type="email"/>
        <div className='checkbox'>
        <input type="checkbox"/>  
        Item 1
        </div>
        <div className='checkbox'>
        <input type="checkbox"/>Item 2
        </div>
        <div className='checkbox'>
        <input type="checkbox"/>Item 3
        </div>
        <p>How can we help?</p>
        <input type="text"/>
        <div className='checkbox'>
        <input type="checkbox"/>I accept to the Terms and Services
        </div>
        <IonButton className='idk' color="success">Success</IonButton>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
