import {Form} from './common/Form';
import {Link} from 'react-router-dom';

export default function SignIn() {
    return (
        <>
        <h1>MyWallet</h1>
        <Form>
            <input
            type='email'
            placeholder='E-mail' 
            />
            <input
            type='password'
            placeholder='Senha'
            />
            <button>
                <h3>Entrar</h3>
            </button>
        </Form>
        <Link to ='/signup'>
            <h5>Primeira vez? cadastre-se!</h5>
        </Link>
        </>
    )
}