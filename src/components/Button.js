import React from 'react';

import {StyledButton} from "./styles/Button.styled";

const Button = ({id, bgColor, textColor}) => {

    const onSubmit = () =>{
        alert("This is the " + id.toUpperCase() + " card.");
    }

    return(
        <StyledButton btnColor={textColor} bg={bgColor} onClick={onSubmit}>
            Learn More
        </StyledButton>
    );
}

export default Button;