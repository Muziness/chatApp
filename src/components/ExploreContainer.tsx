import React from 'react';
import './ExploreContainer.css';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonItem, IonLabel, IonItemDivider, IonList } from '@ionic/react';

interface ContainerProps {
  name: string;
}

export const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};
export const TextAreaExamples: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TextArea Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default textarea</IonItemDivider>          
          <IonItem>
            <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default ExploreContainer;
