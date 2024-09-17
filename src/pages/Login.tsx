import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel, IonText } from '@ionic/react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes manejar el inicio de sesión
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className="ion-padding" style={{ textAlign: 'center', marginTop: '1rem' }}>
        <p>Bienvenido a la página de inicio de sesión</p>
  
        {/* Campo para el usuario/correo */}
        <IonItem>
          <IonLabel position="stacked">Usuario o Correo</IonLabel>
          <IonInput 
            type="email"
            value={email}
            onIonChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setEmail(e.detail.value!)} 
            placeholder="Ingresa tu correo" 
          />
        </IonItem>

        {/* Campo para la contraseña */}
        <IonItem>
          <IonLabel position="stacked">Contraseña</IonLabel>
          <IonInput 
            type="password"
            value={password}
            onIonChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setPassword(e.detail.value!)} 
            placeholder="Ingresa tu contraseña" 
          />
        </IonItem>

        {/* Botón de iniciar sesión */}
        <IonButton expand="block" onClick={handleLogin}>
          Iniciar Sesión
        </IonButton>

        {/* Texto para recuperar contraseña */}
        <IonText color="primary">
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login;
