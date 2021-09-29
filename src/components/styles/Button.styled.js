import styled from "styled-components";

export const StyledButton = styled.button`
    border: 2px solid white;
    padding: 10px;
    border-radius: 30px;
    width:60%;
    background: hsl(0, 0%, 95%);
    color: ${ props => props.btnColor };
    
    &:hover{
        background-color: ${ props => props.bg };
        color: white;
        cursor: pointer;
    }
`