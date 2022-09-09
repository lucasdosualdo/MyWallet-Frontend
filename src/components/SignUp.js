import {Form} from './common/Form';
import {Link} from 'react-router-dom';

export default function SignUp() {
    return (
        <>
            <h1>MyWallet</h1>
        <Form>
            <input
            type='text'
            placeholder='Nome' 
            />
            <input
            type='email'
            placeholder='E-mail' 
            />
            <input
            type='password'
            placeholder='Senha'
            />
            <input
            type='password'
            placeholder='Confirme a senha'
            />
            <button>
                <h3>Entrar</h3>
            </button>
        </Form>
        <Link to = '/signin'>
            <h5>Já tem uma conta? Entre agora!</h5>
        </Link>
        </>
    )
}