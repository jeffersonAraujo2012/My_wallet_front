import { useState } from "react";
import TitleApp from "../../components/TitleApp";
import BtnFullWidth from "../../components/BtnFullWidth";
import Input from "../../components/Input";
import SimpleLink from "../../components/SimpleLink";
import LoginPageStyle from "./style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginPageStyle>
      <TitleApp />
  
      <form>
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
