import { useState } from "react";
import BtnFullWidth from "../../components/BtnFullWidth";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import NewCashInStyle from "./style";

export default function NewCashIn() {
  const [value, setValue] = useState();
  const [description, setDescription] = useState("");

  return (
    <NewCashInStyle>
      <PageTitle text="Nova entrada" />

      <form>
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
          placeholder="Senha"
        />
        <BtnFullWidth text="Salvar entrada" />
      </form>
    </NewCashInStyle>
  );
}
