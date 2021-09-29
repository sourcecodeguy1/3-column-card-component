# Frontend Mentor: 3 column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Live Site URL: [3-column-card-component](https://nervous-feynman-35a093.netlify.app/)

## My process

### Built with

- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned how to implement and utilized styled-components. It's a different way on how to style specific React components.
In addition, this is mobile responsive utilizing CSS media queries breakpoints and flex box.

A small preview of my code. Snippet down below:

```html
<StyledButton btnColor={textColor} bg={bgColor} onClick={onSubmit}>
    Learn More
</StyledButton>
```
```css
.App{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
```
```js
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
```

### Continued development

Since I utilized styled-components for only one React Js component,
I'm tempted to continue using this package for the remaining components
in this project in the future.

## Author

- Website - [juliowebmaster.com](https://juliowebmaster.com)
- Frontend Mentor - [@sourcecodeguy1](https://www.frontendmentor.io/profile/sourcecodeguy1)

## Installation

- Clone the project from GitHub
- Make sure you switch to the project's directory
- Run npm install to install the necessary packages
- Then, run npm start to run the application
