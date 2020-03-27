import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .form-container {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }

  .form-container > form {
    margin-top: 100px;
  }

  form > h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;
