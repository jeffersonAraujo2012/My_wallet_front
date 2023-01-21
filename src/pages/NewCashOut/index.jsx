import { useState } from "react";
import BtnFullWidth from "../../components/BtnFullWidth";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import NewCashOutStyle from "./style";

export default function NewCashOut() {
  const [value, setValue] = useState();
  const [description, setDescription] = useState("");

  return (
    <NewCashOutStyle>
      <PageTitle text="Nova saída" />

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
          placeholder="Descrição"
        />
        <BtnFullWidth text="Salvar saída" />
      </form>
    </NewCashOutStyle>
  );
}
