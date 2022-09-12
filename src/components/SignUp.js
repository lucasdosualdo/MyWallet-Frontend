import { FormField } from "./common/FormField";
import { Container } from "./common/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();
  function signUpForm(e) {
    e.preventDefault();
    console.log("fui acionado");
    const request = axios.post("http://localhost:5000/signup", body);

    request.then((response) => {
      setBody({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
    });

    request.catch((error) => {
      alert(error.response.data);
    });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <FormField>
        <input
          type="text"
          placeholder="Nome"
          required
          onChange={(e) => setBody({ ...body, name: e.target.value })}
        />
        {console.log(body)}
        <input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setBody({ ...body, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setBody({ ...body, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          required
          onChange={(e) =>
            setBody({ ...body, confirmPassword: e.target.value })
          }
        />
        <button type="submit" onClick={signUpForm}>
          <h3>Cadastrar</h3>
        </button>
      </FormField>
      <Link to="/">
        <h5>Já tem uma conta? Entre agora!</h5>
      </Link>
    </Container>
  );
}
