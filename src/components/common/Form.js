import styled from 'styled-components';

export function Form ({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.form`
display: flex;
flex-direction: column;
width: 100%;
input {
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    height: 58px;
    margin-bottom: 13px;
    padding-left: 15px;
}
button {
    background-color: #A328D6;
    border-radius: 5px;
    border: none;
    height: 46px;
    cursor: pointer;
}
`
