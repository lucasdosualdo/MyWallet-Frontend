import { Container } from "./common/Container";
import { FormField } from "./common/FormField";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Output() {
  const { config } = useContext(UserContext);
  const [body, setBody] = useState({
    value: "",
    description: "",
  });
  let navigate = useNavigate();

  function outputForm(e) {
    e.preventDefault(e);
    const request = axios.post("http://localhost:5000/output", body, config);
    request.then((response) => {
      navigate("/myprofile");
    });

    request.catch((error) => {
      alert(error.response.data);
    });
  }

  return (
    <Container>
      <Header>
        <h2>Nova saída</h2>
      </Header>
      <FormField>
        <input
          type="number"
          placeholder="Valor"
          required
          onChange={(e) => setBody({ ...body, value: e.target.value })}
          value={body.value}
        />
        <input
          type="text"
          placeholder="Descrição"
          required
          onChange={(e) => setBody({ ...body, description: e.target.value })}
          value={body.description}
        />
        <button onClick = {outputForm}>
          <h3>Salvar saída</h3>
        </button>
      </FormField>
    </Container>
  );
}

const Header = styled.div`
  width: 100%;
  padding-top: 25px;
  margin-bottom: 50px;
`;
