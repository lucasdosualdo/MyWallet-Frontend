import styled from 'styled-components';

export function Container ({children}) {
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
padding: 0 25px;

`
