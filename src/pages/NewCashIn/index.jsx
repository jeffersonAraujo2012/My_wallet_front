import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import BtnFullWidth from "../../components/BtnFullWidth";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import NewCashInStyle from "./style";

export default function NewCashIn() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [session, setSession] = useContext(AuthContext);
  const navigate = useNavigate();

  async function addCashIn(e) {
    e.preventDefault();

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

    const newCashIn = {
      description: description,
      value: Number(value),
      type: "in",
    };

    try {
      const cashInPromise = axios.post(
        "http://localhost:5000/registers",
        newCashIn,
        {
          headers: {
            authorization: `Bearer ${session.token}`,
            user_id: session.userId,
          },
        }
      );

      cashInPromise.then(() => {
        alert("Entrada feita com sucesso.");
        navigate("/home");
      });

      cashInPromise.catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("session");
          setSession(undefined);
          alert("Sua sessão expirou!");
          navigate("/");
        }
        if (error.response.status === 422) {
          error.response.data?.forEach(err => {
            alert(err.message);
          })
        }
      });
    } catch (error) {
      alert("Algo deu errado ao enviar a entrada");
    }
  }

  return (
    <NewCashInStyle>
      <PageTitle text="Nova entrada" />

      <form onSubmit={addCashIn}>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Valor"
        />
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          placeholder="Descrição"
        />
        <BtnFullWidth text="Salvar entrada" />
      </form>
    </NewCashInStyle>
  );
}
