// import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import './Tab3.css';
// import { camera } from 'ionicons/icons';
// import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// import { useState } from 'react';

// const Tab3: React.FC = () => {
//   const [photo, setPhoto] = useState<string>("")

//   async function takePicture() {
//     const image = await Camera.getPhoto({
//       quality: 90,
//       allowEditing: false,
//       resultType: CameraResultType.DataUrl,
//       source: CameraSource.Camera,
//     });
//     // 'image' contiene información sobre la foto tomada
//     console.log('Foto tomada:', image.dataUrl);
//     setPhoto(image.dataUrl)
//   }

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Tab 3</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//        <IonFab>
//         <IonFabButton onClick={takePicture}>
//           <IonIcon icon={camera}></IonIcon>
//         </IonFabButton>
//        </IonFab>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Tab3;


import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonIcon, IonFab, IonFabButton } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { camera } from 'ionicons/icons';

const CameraExample: React.FC = () => {
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      // Guardar la foto en el estado
      setPhoto(image.dataUrl);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cámara Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={takePhoto}>
            <IonIcon icon={camera}>
          </IonIcon>
        </IonFabButton>
        </IonFab>
        {photo && <IonImg src={photo} />}
      </IonContent>
    </IonPage>
  );
};

export default CameraExample;
