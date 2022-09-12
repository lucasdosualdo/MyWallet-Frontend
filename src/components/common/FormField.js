import styled from "styled-components";

export function FormField({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    height: 58px;
    margin-bottom: 13px;
    padding-left: 15px;
  }
  button {
    background-color: #a328d6;
    border-radius: 5px;
    border: none;
    height: 46px;
    cursor: pointer;
  }
`;
