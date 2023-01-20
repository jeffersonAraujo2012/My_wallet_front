import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SimpleLink({text, to}){
  return(
    <StyledLink to={to}>{text}</StyledLink>
  )
}

const StyledLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: white;

  text-decoration: none;
  text-align: center;
`