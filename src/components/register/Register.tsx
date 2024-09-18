import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonLabel, IonToolbar, IonTitle, IonList, IonItem } from '@ionic/react';

// Define los componentes para cada subcategoría
const RegistrarMunicipios: React.FC = () => (
  <IonList>
    <IonItem>Formulario para registrar municipios</IonItem>
    {/* Agrega más elementos según sea necesario */}
  </IonList>
);

const RegistrarAldea: React.FC = () => (
  <IonList>
    <IonItem>Formulario para registrar aldeas</IonItem>
    {/* Agrega más elementos según sea necesario */}
  </IonList>
);

const RegistrarProyectos: React.FC = () => (
  <IonList>
    <IonItem>Formulario para registrar proyectos</IonItem>
    {/* Agrega más elementos según sea necesario */}
  </IonList>
);

const Register: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState('Municipios');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
        <IonSegment value={selectedSegment} onIonChange={(e: { detail: { value: string; }; }) => setSelectedSegment(e.detail.value as string)}>
          <IonSegmentButton value="Municipios">
            <IonLabel>Municipios</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Aldeas">
            <IonLabel>Aldeas</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Proyectos">
            <IonLabel>Proyectos</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        {selectedSegment === 'Municipios' && <RegistrarMunicipios />}
        {selectedSegment === 'Aldeas' && <RegistrarAldea />}
        {selectedSegment === 'Proyectos' && <RegistrarProyectos />}
      </IonContent>
    </IonPage>
  );
};

export default Register;
