import styled from "styled-components"
import { BTN_BACKGROUND_COLOR } from "../constants/colors"

export default function BtnFullWidth({text}){
  return(
    <StyledButton>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 100%;
  height: 46px;

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: white;

  border: none;
  border-radius: 5px;

  background-color: ${BTN_BACKGROUND_COLOR};
`