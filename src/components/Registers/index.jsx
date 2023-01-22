import { PuffLoader } from "react-spinners";
import styled from "styled-components";
import {
  TEXT_CASH_IN,
  TEXT_CASH_OUT,
  BTN_BACKGROUND_COLOR,
} from "../../constants/colors";
import Register from "./Register";

export default function Registers({ registers }) {
  let balance = 0;

  registers?.forEach((reg) => {
    if (reg.type === "in") balance += Number(reg.value);
    if (reg.type === "out") balance -= Number(reg.value);
  });

  return (
    <StyledRegisters registers={!!registers}>
      {!registers && <PuffLoader color={BTN_BACKGROUND_COLOR} />}

      {registers?.length === 0 && <h2>Não há registros de entrada ou saída</h2>}

      {registers && registers.length > 0 && (
        <>
          {registers.map((reg) => {
            return (
              <Register
                key={reg._id}
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
        </>
      )}
    </StyledRegisters>
  );
}

const StyledRegisters = styled.section`
  position: relative;
  flex: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    !props.registers || props.registers?.length === 0 ? "center" : "initial"};

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
    margin-top: auto;

    p {
      font-size: 17px;
      line-height: 20px;
      font-weight: 700;
    }

    p.balance__value {
      font-weight: 400;
      color: ${(props) => (props.balance < 0 ? TEXT_CASH_OUT : TEXT_CASH_IN)};
    }
  }
`;
