import SignupPageStyle from "./style";
import TitleApp from "../../components/TitleApp";
import Input from "../../components/Input";
import { useState } from "react";
import BtnFullWidth from "../../components/BtnFullWidth";
import SimpleLink from "../../components/SimpleLink";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassoword, setConfirmPassword] = useState("");

  return (
    <SignupPageStyle>
      <TitleApp />

      <form>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassoword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <BtnFullWidth text="Cadastrar" />
      </form>

      <SimpleLink text="Já tem uma conta? Entre agora!"/>
    </SignupPageStyle>
  );
}
