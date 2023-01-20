import styled from "styled-components";

import { PLACEHOLDER_COLOR, PLACEHOLDER_OPACITY } from "../../constants/colors";

const PLACEHOLDER_STYLE = /*CSS*/`
  ::-webkit-input-placeholder {
    color: ${PLACEHOLDER_COLOR};
    opacity: ${PLACEHOLDER_OPACITY};
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: ${PLACEHOLDER_COLOR};
    opacity: ${PLACEHOLDER_OPACITY};
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${PLACEHOLDER_COLOR};
    opacity: ${PLACEHOLDER_OPACITY};
  }

  :-ms-input-placeholder {
    color: ${PLACEHOLDER_COLOR};
    opacity: ${PLACEHOLDER_OPACITY};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 58px;
  padding: 15px;
  margin-bottom: 12px;

  background-color: white;
  border: none;
  border-radius: 5px;

  font-size: 20px;
  line-height: 24px;

  ${PLACEHOLDER_STYLE};
`;

export default StyledInput;
