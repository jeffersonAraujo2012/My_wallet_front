import { useContext, useEffect, useState } from "react";
import TitleApp from "../../components/TitleApp";
import BtnFullWidth from "../../components/BtnFullWidth";
import Input from "../../components/Input";
import SimpleLink from "../../components/SimpleLink";
import LoginPageStyle from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/home");
    }
  });

  async function login(e) {
    e.preventDefault();

    const loginPromise = axios.post("http://localhost:5000/signin", {
      email: email,
      password: password,
    });

    loginPromise.then((res) => {
      const newSession = res.data;
      setSession(newSession)
      localStorage.setItem("session", JSON.stringify(newSession));
      navigate("/home");
    });

    loginPromise.catch((error) => console.log("Algo deu errado no login"));
  }
  return (
    <LoginPageStyle>
      <TitleApp />

      <form onSubmit={login}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="E-mail"
        />
        <Input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Senha"
        />
        <BtnFullWidth text="Entrar" />
      </form>

      <SimpleLink text="Primeira vez? Cadastre-se!" to="/cadastro" />
    </LoginPageStyle>
  );
}
