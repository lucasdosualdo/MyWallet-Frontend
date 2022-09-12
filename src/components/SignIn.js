import { FormField } from "./common/FormField";
import { Container } from "./common/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function SignIn() {
  const { setConfig } = useContext(UserContext);
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  function signInForm(e) {
    e.preventDefault(e);
    const request = axios.post("http://localhost:5000/signin", body);
    request.then((response) => {
      setConfig({
        headers: {
          Authorization: `Bearer ${response.data}`,
        },
      });
      navigate("/myprofile");
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
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          value={body.email}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          value={body.password}
        />
        <button onClick={signInForm}>
          <h3>Entrar</h3>
        </button>
      </FormField>
      <Link to="/signup">
        <h5>Primeira vez? cadastre-se!</h5>
      </Link>
    </Container>
  );
}
