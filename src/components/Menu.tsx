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
import { archiveOutline, archiveSharp, bookmarkOutline, calendar, calendarSharp, gridSharp, heartOutline, heartSharp, home, homeSharp, logOutSharp, mailOutline, mailSharp, mapSharp, paperPlaneOutline, paperPlaneSharp, recording, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import  './home/Home';
import  './calendar/Calendar'
import './map/Map'
import './register/Register'
import Login from '../pages/Login';
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
    url: '/Home',
    iosIcon: home,
    mdIcon: homeSharp
  },

  {
    title: 'Registro', //Imbox
    url: '/Register',
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
    url: '/Calendar',
    iosIcon: heartOutline,
    mdIcon: calendarSharp
  },
  {
    title: 'Mapa',
    url: '/Map',
    iosIcon: archiveOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Salir',
    url: '/Login',
    iosIcon: trashOutline,
    mdIcon: logOutSharp
  },
 

];

// const Menu: React.FC = () => {
//   const location = useLocation();

//   return (
//     <IonMenu contentId="main" type="overlay">
//       <IonContent>
//         <IonList id="inbox-list">
//           <IonListHeader>Inbox</IonListHeader>
//           <IonNote>hi@ionicframework.com</IonNote>
//           {appPages.map((appPage, index) => {
//             return (
//               <IonMenuToggle key={index} autoHide={false}>
//                 <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
//                   <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
//                   <IonLabel>{appPage.title}</IonLabel>
//                 </IonItem>
//               </IonMenuToggle>
//             );
//           })}
//         </IonList>
//       </IonContent>
//     </IonMenu>
//   );
// };

const Menu: React.FC = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar autenticación

  // Simular login (puedes reemplazar esto con una autenticación real)
  const handleLogin = () => {
    setIsAuthenticated(true); // Cambia el estado a autenticado
  };

  // Mostrar el componente de Login si no está autenticado
  if (!isAuthenticated) {
    return <Login />; // Renderiza el componente Login si no está autenticado
  }

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
