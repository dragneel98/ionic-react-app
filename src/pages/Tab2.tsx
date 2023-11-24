import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { employee } from '../models/employee.model';
import EmployeeItem from '../components/EmployeeItem';

const Tab2: React.FC = () => {
  const [employees, setEmployees] = useState<employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("https://randomuser.me/api/?results=25");
        const response = await result.json();
        if (!result.ok) {
          throw new Error('Network response was not ok');
        }
        setEmployees(response.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamar a la función para cargar datos cuando se monta el componente
  }, []); // Vacío para que solo se ejecute al montarse el componente
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {employees?.map((emp, index) => (
            <EmployeeItem key={index} employee={emp} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
