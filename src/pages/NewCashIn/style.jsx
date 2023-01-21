import styled from "styled-components";

const NewCashInStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100%;

  & > p {
    width: 100%;
    text-align: left;
    margin-bottom: 40px;
  }

  form {
    width: 100%;
  }
`;

export default NewCashInStyle;