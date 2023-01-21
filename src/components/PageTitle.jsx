import styled from "styled-components";

export default function PageTitle({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  color: white;
`;
