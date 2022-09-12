import { useState } from "react";
import styled from "styled-components";

export default function ShowTransactionsList({ transaction, key }) {
  const colorValue = transaction.type;
 
  return (
    <>
      <Transaction>
        <Date>{transaction.date}</Date>
        <Description>{transaction.description}</Description>
        <Value colorValue ={transaction.type}>{transaction.value}</Value>
      </Transaction>
    </>
  );
}
const Transaction = styled.div`
  margin-bottom: 20px;
`;

const Date = styled.span`
  color: #c6c6c6;
  margin-right: 10px;
`;
const Description = styled.span`
  color: #000000;
`;

const Value = styled.span`
  color: ${(props) => (props.colorValue === "input" ? "#03AC00" : "#C70000")};
  position: absolute;
  right: 10px;
`;
