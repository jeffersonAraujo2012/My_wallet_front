import styled from "styled-components";

const LoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100%;
  
  h1 {
    font-family: "Saira Stencil One", sans-serif;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 24px;
    text-align: center;
    color: white;
  }

  form {
    width: 100%;
  }

  button {
    margin-bottom: 36px;
  }
`;

export default LoginPageStyle;
