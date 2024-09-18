import React, { useState } from 'react';
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
import { home, homeSharp, mailOutline, recording, paperPlaneOutline, gridSharp, calendarSharp, mapSharp, logOutSharp, trashOutline } from 'ionicons/icons';
import Login from '../pages/Login';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Principal',
    url: '/Home',
    iosIcon: home,
    mdIcon: homeSharp
  },
  {
    title: 'Registro',
    url: '/Register',
    iosIcon: mailOutline,
    mdIcon: recording
  },
  {
    title: 'Reportes',
    url: '/folder/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: gridSharp
  },
  {
    title: 'Calendario',
    url: '/Calendar',
    iosIcon: calendarSharp,
    mdIcon: calendarSharp
  },
  {
    title: 'Mapa',
    url: '/Map',
    iosIcon: mapSharp,
    mdIcon: mapSharp
  },
  {
    title: 'Salir',
    url: '/Login',
    iosIcon: trashOutline,
    mdIcon: logOutSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // // Manejar el inicio de sesión
  // const handleLogin = () => {
  //   setIsAuthenticated(true); // Cambiar el estado de autenticación
  // };

  // // Si el usuario no está autenticado, mostrar la pantalla de login
  // if (!isAuthenticated) {
  //   return <Login/>;
  // }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
