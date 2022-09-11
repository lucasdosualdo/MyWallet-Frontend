import { Container } from './common/Container';
import {Form} from './common/Form';
import styled from 'styled-components';

export default function Output() {
    return (
       <Container>
            <Header>
                <h2>Nova saída</h2>
            </Header>
        <Form>
            <input
            type='number'
            placeholder='Valor'
            required
            />
            <input
            type='text'
            placeholder='Descrição'
            required
            />
            <button>
                <h3>Salvar saída</h3>
            </button>
        </Form>
       </Container>
    )
}

const Header = styled.div`
width: 100%;
padding-top: 25px;
margin-bottom: 50px;
`