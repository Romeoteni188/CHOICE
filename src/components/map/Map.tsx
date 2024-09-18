import React, { useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// Ajusta el tamaño del contenedor del mapa
const containerStyle = {
    width: '100%',
    height: '100vh',
  };
  
  // Define las coordenadas del centro del mapa
  const center = {
    lat: -34.397,
    lng: 150.644,
  };
  
  // Define el componente de mapa
  const Map: React.FC = () => {
    return (
      <LoadScript googleMapsApiKey="AIzaSyA0acS-c4RSsRMSS82MFhGeKSjH3VaNlIA">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
        >
          { /* Aquí puedes agregar marcadores o cualquier otro componente del mapa */ }
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default Map;