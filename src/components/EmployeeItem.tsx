import React from 'react'
import { employee } from '../models/employee.model'
import { IonAvatar, IonItem, IonLabel } from '@ionic/react'

 const EmployeeItem: React.FC<{employee: employee}> = ({employee}) => {
  return (
    <IonItem>
        <IonAvatar slot='start'>
            <img src={employee.picture.medium}></img>
        </IonAvatar>
         <IonLabel>
             <h2> {employee.name.first} </h2>
             <p> {employee.location.city} </p>
         </IonLabel>
    </IonItem>
  )
}

export default EmployeeItem;
