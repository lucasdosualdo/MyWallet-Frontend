import {useContext} from 'react';
import UserContext from '../contexts/UserContext';
import { Container } from './common/Container';
import styled from 'styled-components';
import negative from '../assets/negative.svg'

export default function MyProfile () {
    const {name} = useContext(UserContext);
    return (
        <Container>
        <Header>
            <h2>Olá, {name}</h2>
            <ion-icon name="log-out-outline"></ion-icon>
        </Header>
        <RegistrationBox>
            <p>Não há registros de entrada ou saída</p>
        </RegistrationBox>
        <Footer>
            <div>
                <ion-icon name="add-circle-outline"></ion-icon> 
                <h4>
                    <p>Nova</p>
                    <p>entrada</p>
                </h4>               
            </div>
            <div>   
                <img src={negative} />
                <h4>
                    <p>Nova</p>
                    <p>saída</p>
                </h4>               
            </div>
        </Footer> 
        </Container>
    )
}

const Header = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 25px;
`

const Footer = styled.div`
display: flex;
justify-content: space-between;
position: fixed;
bottom: 16px;
left: 25px;
right: 25px;
div{
    width: 180px;
    height: 114px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #A328D6;
    border-radius: 5px;
    &:first-child{
    margin-right: 15px;
    }
}
`

const RegistrationBox = styled.div`
background-color: #FFFFFF;
border-radius: 5px;
height: auto;
position: fixed;
top: 80px;
bottom: 160px;
left: 25px;
right: 25px;
display: flex;
justify-content: center;
align-items: center;
p{
    color: #868686;
}
`