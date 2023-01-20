import styled from "styled-components";

export default function TitleApp() {
  return <StyledTitle>MyWallet</StyledTitle>;
}

const StyledTitle = styled.h1`
  font-family: "Saira Stencil One", sans-serif;
  font-size: 32px;
  line-height: 50px;
  margin-bottom: 24px;
  text-align: center;
  color: white;
`;
