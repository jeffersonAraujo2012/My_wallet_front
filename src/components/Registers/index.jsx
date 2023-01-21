import styled from "styled-components";
import { TEXT_CASH_IN, TEXT_CASH_OUT } from "../../constants/colors";
import Register from "./Register";

export default function Registers() {
  const registers = [
    {
      id: 0,
      date: new Date(),
      description: "Jantar com o amor",
      value: 129.9,
      type: "out",
    },
    {
      id: 1,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 2,
      date: new Date(),
      description: "Jantar com o amor",
      value: 129.9,
      type: "out",
    },
    {
      id: 3,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 4,
      date: new Date(),
      description: "Jantar com o amor",
      value: 129.9,
      type: "out",
    },
    {
      id: 5,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 6,
      date: new Date(),
      description: "Jantar com o amor",
      value: 129.9,
      type: "out",
    },
    {
      id: 7,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 8,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 9,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 10,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 11,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 12,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "in",
    },
    {
      id: 13,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "out",
    },
    {
      id: 14,
      date: new Date(),
      description: "Venda realizada",
      value: 600.0,
      type: "out",
    },
  ];
  let balance = 0;

  registers.forEach((reg) => {
    if (reg.type === "in") balance += Number(reg.value);
    if (reg.type === "out") balance -= Number(reg.value);
  });

  if (registers.length === 0) {
    return <h2>Não há registros de entrada ou saída</h2>;
  }

  return (
    <StyledRegisters>
      {registers.map((reg) => {
        return (
          <Register
            key={reg.id}
            date={reg.date}
            description={reg.description}
            value={reg.value}
            type={reg.type}
          />
        );
      })}

      <div className="balance">
        <p>SALDO</p>
        <p className="balance__value">
          {Math.abs(balance).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </StyledRegisters>
  );
}

const StyledRegisters = styled.section`
  position: relative;
  flex: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-height: calc(100vh - 221px);
  margin-bottom: 15px;
  padding: 12px 12px 0px;

  background-color: white;
  border-radius: 5px;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #868686;
    text-align: center;

    width: 60%;
  }

  div.balance {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 10px 0;
    background-color: white;

    p {
      font-size: 17px;
      line-height: 20px;
      font-weight: 700;
    }

    p.balance__value {
      font-weight: 400;
      color: ${props => props.balance < 0 ? TEXT_CASH_OUT : TEXT_CASH_IN}
    }
  }
`;
