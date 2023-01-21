import { IonIcon } from "@ionic/react";
import { addCircleOutline, removeCircleOutline } from "ionicons/icons";

import HomePageStyle from "./style";

import logOutIcon from "../../assets/log-out-icon.svg";

export default function HomePage() {
  return (
    <HomePageStyle>
      <header>
        <p>Olá, Fulano</p>
        <img src={logOutIcon} alt="Sair" />
      </header>

      <section>
        <h2>Não há registros de entrada ou saída</h2>
      </section>

      <div>
        <button>
          <IonIcon icon={addCircleOutline} />
          <p>Nova entrada</p>
        </button>

        <button>
          <IonIcon icon={removeCircleOutline} />
          <p>Nova saída</p>
        </button>
      </div>
    </HomePageStyle>
  );
}
