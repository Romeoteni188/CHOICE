import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel } from '@ionic/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Reports.css'; // Asegúrate de tener el archivo CSS para los estilos

// Registra los componentes necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Datos de ejemplo para los reporteros
const reporters = [
  {
    id: 1,
    name: 'Carlos Martínez',
    specialty: 'Investigación',
    bio: 'Carlos tiene más de 10 años de experiencia en investigación y ha ganado varios premios por su trabajo en profundidad.',
    articles: 35 // Ejemplo de métrica: número de artículos publicados
  },
  {
    id: 2,
    name: 'Ana González',
    specialty: 'Noticias Internacionales',
    bio: 'Ana ha trabajado como corresponsal internacional en diversas zonas de conflicto y es experta en política internacional.',
    articles: 50
  },
  {
    id: 3,
    name: 'Luis Pérez',
    specialty: 'Deportes',
    bio: 'Luis cubre eventos deportivos desde hace 15 años y tiene un profundo conocimiento en fútbol y deportes extremos.',
    articles: 25
  }
];

const Reports: React.FC = () => {
  // Configuración de los datos del gráfico
  const chartData = {
    labels: reporters.map(reporter => reporter.name),
    datasets: [
      {
        label: 'Número de Artículos',
        data: reporters.map(reporter => reporter.articles),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value} artículos`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reportes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {reporters.map(reporter => (
            <IonCard key={reporter.id} className="reporter-card">
              <IonCardHeader>
                <IonCardTitle>{reporter.name}</IonCardTitle>
                <IonLabel>{reporter.specialty}</IonLabel>
              </IonCardHeader>
              <IonCardContent>
                {reporter.bio}
                <div className="chart-container">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Reports;
