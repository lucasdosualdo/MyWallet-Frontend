import {Form} from './common/Form';
import { Container } from './common/Container';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from '../contexts/UserContext';

export default function SignUp() {
    const {setName} = useContext(UserContext);

    return (
        <Container>
            <h1>MyWallet</h1>
            <Form>
                <input
                type='text'
                placeholder='Nome'
                required
                onChange={e=>setName(e.target.value)}
                />
                <input
                type='email'
                placeholder='E-mail' 
                required
                />
                <input
                type='password'
                placeholder='Senha'
                required
                />
                <input
                type='password'
                placeholder='Confirme a senha'
                required
                />
                <button>
                    <h3>Entrar</h3>
                </button>
            </Form>
            <Link to = '/'>
                <h5>Já tem uma conta? Entre agora!</h5>
            </Link>
        </Container>
    )
}