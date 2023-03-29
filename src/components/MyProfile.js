import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Container } from "./common/Container";
import styled from "styled-components";
import negative from "../assets/negative.svg";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ShowTransactionsList from "./ShowTransactionsList";

export default function MyProfile() {
  const navigate = useNavigate();
  const { name, setName } = useContext(UserContext);
  const { config } = useContext(UserContext);
  const [transactionsList, setTransactionsList] = useState([]);

  useEffect(() => {
    if (name === "") {
      navigate("/");
    }
  }, [name, navigate]);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/myprofile", config);
    promise.then((response) => {
      setTransactionsList([...response.data]);
    });
    promise.catch((error) => {
      alert(error.response.data);
    });
  }, []);

  function getBalance() {
    if (transactionsList.length !== 0) {
      return transactionsList.reduce((previous, current) => {
        if (current.type === "input") {
          return previous + Number(current.value);
        }
        return previous - Number(current.value);
      }, 0);
    } else {
      return 0;
    }
  }

  const balance = getBalance().toFixed(2);

  return (
    <Container>
      <Header>
        <h2>Olá, {name}</h2>
        <ion-icon name="log-out-outline" onClick={() => setName("")}></ion-icon>
      </Header>
      <RegistrationBox transactionsLength={transactionsList.length}>
        {transactionsList.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          transactionsList.map((transaction, index) => (
            <ShowTransactionsList transaction={transaction} key={index} />
          ))
        )}
        <BalanceBox balance={balance}>
          <span>
            <h6>SALDO</h6>
          </span>
          <span>
            <p>{balance}</p>
          </span>
        </BalanceBox>
      </RegistrationBox>
      <Footer>
        <Link to="/input">
          <div>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h4>
              <p>Nova</p>
              <p>entrada</p>
            </h4>
          </div>
        </Link>
        <Link to="/output">
          <div>
            <img src={negative} />
            <h4>
              <p>Nova</p>
              <p>saída</p>
            </h4>
          </div>
        </Link>
      </Footer>
    </Container>
  );
}

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 16px;
  left: 25px;
  right: 25px;
  div {
    width: 180px;
    height: 114px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #a328d6;
    border-radius: 5px;
    &:first-child {
      margin-right: 15px;
    }
  }
`;

const RegistrationBox = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px 10px 40px 10px;
  height: auto;
  position: fixed;
  top: 80px;
  bottom: 160px;
  left: 25px;
  right: 25px;
  display: flex;
  overflow: scroll;
  flex-direction: ${(props) =>
    props.transactionsLength === 0 ? "row" : "column"};
  justify-content: ${(props) =>
    props.transactionsLength === 0 ? "center" : "flex-start"};
  align-items: ${(props) =>
    props.transactionsLength === 0 ? "center" : "start"};
  p {
    color: #868686;
  }
`;

const BalanceBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 160px;
  right: 35px;
  left: 35px;
  background-color: #ffffff;
  P {
    font-size: 17px;
    color: ${(props) => (props.balance >= 0 ? "#03AC00" : "#C70000")};
  }
`;
