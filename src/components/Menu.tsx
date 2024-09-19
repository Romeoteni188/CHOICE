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
import { home, homeSharp, mailOutline, recording, paperPlaneOutline, gridSharp, calendarSharp, mapSharp, logOutSharp, trashOutline, constructSharp, construct, calendar } from 'ionicons/icons';
import Login from '../pages/Login';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  subPages?: { title: string; url: string }[]; 
}

const appPages: AppPage[] = [
  {
    title: 'Panel',
    url: '/Home',
    iosIcon: home,
    mdIcon: homeSharp
  },
  {
    title: 'Proyectos',
    url: '/Register',
    iosIcon: mailOutline,
    mdIcon: recording,
    subPages: [
      { title: 'Visualizar', url: '' },
      { title: 'subtest2', url: '' },
      { title: 'subtest3', url: '' },
      { title: 'Mapa', url: '' },
    ]
  },
  {
    title: 'Graficas',
    url: '/Reports',
    iosIcon: paperPlaneOutline,
    mdIcon: gridSharp,
    subPages: [
      { title: 'subGrafica1', url: '' },
      { title: 'subGrafica2', url: '' },
    ]
  },
  {
    title: 'Calendario',
    url: '/Calendar',
    iosIcon: calendarSharp,
    mdIcon: calendar
  },
  {
    title: 'Mapa',
    url: '/Map',
    iosIcon: mapSharp,
    mdIcon: mapSharp,
    subPages: [
      { title: 'subMapa1', url: '' },
      { title: 'subMapa2', url: '' },
    ]
  },
  {
    title: 'Configuracion',
    url: '/',
    iosIcon: constructSharp,
    mdIcon: construct,
    subPages: [
      { title: 'configSub1', url: '' },
      { title: 'configSub2', url: '' },
    ]
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

  // Estado para controlar el submenú abierto
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // Función para alternar el submenú
  const toggleSubMenu = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          
          {appPages.map((appPage, index) => (
            <div key={index}>
              <IonMenuToggle autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                  onClick={appPage.subPages ? () => toggleSubMenu(appPage.title) : undefined} // Manejador para alternar submenú
                >
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>

              {/* Verifica si la página tiene subpáginas y si su submenú debe mostrarse */}
              {appPage.subPages && openSubMenu === appPage.title && (
                <IonList className="subpage-list">
                  {appPage.subPages.map((subPage, subIndex) => (
                    <IonMenuToggle key={subIndex} autoHide={false}>
                      <IonItem
                        className={location.pathname === subPage.url ? 'selected' : ''}
                        routerLink={subPage.url}
                        routerDirection="none"
                        lines="none"
                        detail={false}
                      >
                        <IonLabel className="subpage-label">{subPage.title}</IonLabel>
                      </IonItem>
                    </IonMenuToggle>
                  ))}
                </IonList>
              )}
            </div>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
