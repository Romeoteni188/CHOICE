import React, { useState } from 'react';
import { IonDatetime, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Calendar.css'

const Calendar: React.FC = () => {
  const [date, setDate] = useState<string | undefined>(undefined);

  const handleDateChange = (e: CustomEvent) => {
    setDate(e.detail.value as string);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonDatetime 
          value={date}
          onIonChange={handleDateChange}
          locale="es-ES"
          presentation="date-time" // Puedes usar "date" o "time" si solo necesitas fecha o hora
        >
          <span slot="time-label">Tiempo</span>
        </IonDatetime>
        {/* {date && <p>Fecha: {date}</p>} */}
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
