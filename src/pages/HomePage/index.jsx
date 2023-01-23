import { IonIcon } from "@ionic/react";
import { addCircleOutline, removeCircleOutline } from "ionicons/icons";

import HomePageStyle from "./style";

import logOutIcon from "../../assets/log-out-icon.svg";
import PageTitle from "../../components/PageTitle";
import Registers from "../../components/Registers";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [registers, setRegisters] = useState();
  const [session, setSession] = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(registers);

  useEffect(() => {
    if (!session) {
      const localSession = localStorage.getItem("session");
      if (localSession) {
        setSession(JSON.parse(localSession));
        return;
      } else {
        navigate("/");
        return;
      }
    }

    const registerPromise = axios.get("http://localhost:5000/registers", {
      headers: {
        authorization: `Bearer ${session.token}`,
        user_id: session.userId,
      },
    });

    registerPromise.then((res) => {
      setRegisters(res.data);
    });

    registerPromise.catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("session");
        alert("Sua sessão expirou!");
        navigate("/");
      }
    });
  }, [navigate, session, setSession]);

  async function signOut() {
    const signoutPromise = axios.delete("http://localhost:5000/signout", {
      headers: {
        authorization: `Bearer ${session.token}`,
        user_id: session.userId,
      },
    })
    signoutPromise.then(() => {
      alert("Até a próxima");
      setSession(undefined);
      localStorage.removeItem("session");
      window.location("/");
    })
    signoutPromise.catch(err => {
      alert("Algo deu errado ao sair");
    })
  }

  return (
    <HomePageStyle>
      <header>
        <PageTitle text="Olá, Fulano" />
        <img onClick={signOut} src={logOutIcon} alt="Sair" />
      </header>

      <Registers registers={registers} />

      <div>
        <button onClick={() => navigate("/nova-entrada")}>
          <IonIcon icon={addCircleOutline} />
          <p>Nova entrada</p>
        </button>

        <button onClick={() => navigate("/nova-saida")}>
          <IonIcon icon={removeCircleOutline} />
          <p>Nova saída</p>
        </button>
      </div>
    </HomePageStyle>
  );
}
