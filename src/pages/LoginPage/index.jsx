import { useState } from "react";
import BtnFullWidth from "../../components/BtnFullWidth";
import Input from "../../components/Input";
import SimpleLink from "../../components/SimpleLink";
import LoginPageStyle from "./style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginPageStyle>
      <h1>MyWallet</h1>
  
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

      <SimpleLink text="Primeira vez? Cadastre-se!" to="/signup" />
    </LoginPageStyle>
  );
}
