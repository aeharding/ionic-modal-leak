import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useState } from "react";
import ModalContent from "./ModalContent";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function present() {
    setIsOpen(true);
  }

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonButton onClick={present}>Present</IonButton>
        </IonContent>
      </IonPage>
      <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
        <ModalContent />
      </IonModal>
    </>
  );
};

export default Home;
