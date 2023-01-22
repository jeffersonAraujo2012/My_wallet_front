import { useState } from "react";
import axios from "axios";

import SignupPageStyle from "./style";
import TitleApp from "../../components/TitleApp";
import Input from "../../components/Input";
import BtnFullWidth from "../../components/BtnFullWidth";
import SimpleLink from "../../components/SimpleLink";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function signup(e) {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    const signupPromise = axios.post("http://localhost:5000/signup", newUser);
    signupPromise.then((res) => {
      if (res.status === 201) {
        alert("Usuário criado com sucesso.");
        navigate("/");
      }
    });
    signupPromise.catch((err) => console.log(err.response.data));
  }

  return (
    <SignupPageStyle>
      <TitleApp />

      <form onSubmit={signup}>
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <BtnFullWidth text="Cadastrar" />
      </form>

      <SimpleLink text="Já tem uma conta? Entre agora!" to="/" />
    </SignupPageStyle>
  );
}
