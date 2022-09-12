import { FormField } from "./common/FormField";
import { Container } from "./common/Container";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <FormField>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button>
          <h3>Entrar</h3>
        </button>
      </FormField>
      <Link to="/signup">
        <h5>Primeira vez? cadastre-se!</h5>
      </Link>
    </Container>
  );
}
