import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
          <IonTitle>My Profile</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='mycontainer'>
          <div className='innerContainer'>

            <div className='profile'>
              <img src="user.png" height={145} width={148}/>

              <h3>Code School</h3>
              <h4>code.ionic.com</h4>

            <button className='btn'>Followers</button>
            <button className='btnlogout'>Logout</button>
            </div>
</div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
