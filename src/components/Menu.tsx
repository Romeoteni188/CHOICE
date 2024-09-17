import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, calendar, calendarSharp, gridSharp, heartOutline, heartSharp, home, homeSharp, logOutSharp, mailOutline, mailSharp, mapSharp, paperPlaneOutline, paperPlaneSharp, recording, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import  './home/Home';

import { registerPlugin } from '@capacitor/core';
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Principal',
    url: '/folder/Home',
    iosIcon: home,
    mdIcon: homeSharp
  },

  {
    title: 'Registro', //Imbox
    url: '/folder/Inbox',
    iosIcon: mailOutline,
    mdIcon: recording
  },
  {
    title: 'Reportes', //
    url: '/folder/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: gridSharp
  },
  {
    title: 'Calendario',
    url: '/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: calendarSharp
  },
  {
    title: 'Mapa',
    url: '/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Salir',
    url: '/folder/Trash',
    iosIcon: trashOutline,
    mdIcon: logOutSharp
  },
  // {
  //   title: 'Spam',
  //   url: '/folder/Spam',
  //   iosIcon: warningOutline,
  //   mdIcon: warningSharp
  // }
 
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
