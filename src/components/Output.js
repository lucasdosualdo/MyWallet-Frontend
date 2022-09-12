import { Container } from './common/Container';
import {FormField} from './common/FormField';
import styled from 'styled-components';

export default function Output() {
    return (
       <Container>
            <Header>
                <h2>Nova saída</h2>
            </Header>
        <FormField>
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
        </FormField>
       </Container>
    )
}

const Header = styled.div`
width: 100%;
padding-top: 25px;
margin-bottom: 50px;
`