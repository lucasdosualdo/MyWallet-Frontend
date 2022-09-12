import { Container } from "./common/Container";
import { FormField } from "./common/FormField";
import styled from "styled-components";

export default function Input() {
  return (
    <Container>
      <Header>
        <h2>Nova entrada</h2>
      </Header>
      <FormField>
        <input type="number" placeholder="Valor" required />
        <input type="text" placeholder="Descrição" required />
        <button>
          <h3>Salvar entrada</h3>
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
