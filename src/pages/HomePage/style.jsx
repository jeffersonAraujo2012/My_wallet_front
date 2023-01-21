import styled from "styled-components";

import { BTN_BACKGROUND_COLOR } from "../../constants/colors";

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 22px;
  }

  section {
    flex: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-bottom: 15px;

    background-color: white;
    border-radius: 5px;

    h2 {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #868686;
      text-align: center;

      width: 60%;
    }
  }

  div {
    display: flex;
    align-items: stretch;

    width: 100%;
    min-height: 114px;

    button {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding: 10px;

      background-color: ${BTN_BACKGROUND_COLOR};

      border: none;
      border-radius: 5px;

      p {
        width: 50%;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        text-align: left;
        color: white;
      }
    }

    button:first-child {
      margin-right: 15px;
    }
  }

  ion-icon {
    color: white;
    font-size: 24px;
  }
`;

export default HomePageStyle;
