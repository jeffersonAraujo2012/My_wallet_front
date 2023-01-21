import styled from "styled-components";
import dayjs from "dayjs";

import { TEXT_CASH_IN, TEXT_CASH_OUT } from "../../constants/colors";

dayjs.locale("pt-br");

export default function Register({ date, description, value, type }) {
  return (
    <StyledRegister type={type}>
      <p className="date">{dayjs(date).format("DD/MM")}</p>
      <p className="description">{description}</p>
      <p className="value">
        {value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </StyledRegister>
  );
}

const StyledRegister = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  width: 100%;
  height: 42px;

  p {
    font-size: 16px;
    line-height: 19px;
  }

  p.date {
    color: #c6c6c6;
  }

  p.description {
    color: black;
    margin-left: 5px;
  }

  p.value {
    color: ${(props) => (props.type === "in" ? TEXT_CASH_IN : TEXT_CASH_OUT)};
    margin-left: auto;
  }

  &:nth-last-child(2) {
    margin-bottom: 100px;
  }
`;
