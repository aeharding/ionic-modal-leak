import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default function ModalContent() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color=" ">
            <IonTitle size="large">Welcome.</IonTitle>
          </IonToolbar>
        </IonHeader>
        Hi!
      </IonContent>
    </>
  );
}
