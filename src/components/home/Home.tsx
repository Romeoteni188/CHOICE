import React, { useState } from 'react';
import './Home.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonList, IonText } from '@ionic/react';

const Home: React.FC = () => {
  // Estados para manejar los valores del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Email:', email);
    alert(`Formulario enviado con: \nNombre: ${name} \nEmail: ${email}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a Choice Humanitarian</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Mensaje de bienvenida */}
        <IonText color="primary">
          <h2 style={{ textAlign: 'center' }}>¡Bienvenido a nuestra plataforma!</h2>
        </IonText>

        {/* Descripción de la empresa */}
        <IonText>
          <p style={{ textAlign: 'center' }}>
            Choice Humanitarian trabaja para ayudar a las comunidades rurales a superar la pobreza extrema mediante la capacitación, el desarrollo sostenible y el acceso a recursos esenciales.
          </p>
        </IonText>

        {/* Imágenes */}
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/assets/images1.jpeg" alt="Comunidades rurales" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <img src="/assets/images3.jpg" alt="Voluntarios trabajando" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <img src="/assets/images2.jpeg" alt="Voluntarios trabajando" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Nombre</IonLabel>
              <IonInput
                value={name}
                onIonChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setName(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setEmail(e.detail.value!)}
                required
              />
            </IonItem>

            <IonButton expand="full" type="submit" className="ion-margin-top">
              Enviar
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
