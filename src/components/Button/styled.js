import styled, { css } from 'styled-components'

const ButtonLabel = styled.span`
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
`

const Button = styled.button`
    align-items: center;
    background-color: ${({theme}) => theme.backgroundColor ? theme.backgroundColor : 'transparent'};
    border: ${({theme}) => theme.border ? theme.border : 0 };
    border-radius: 4px;
    ${props => props.variant === 'contained' && css`
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    `};
    color: ${props => props.theme.color};
    cursor: pointer;
    display: inline-flex;
    font-family: 'Roboto';
    font-size: 0.875em;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 0.02857em;
    line-height: 1.75;
    margin: 0;
    min-width: 64px;
    outline: 0;
       padding: 0.50em 1em;
    ${props => props.color === 'disabled' && css`
        pointer-events: none;
        opacity: 0.65;
    `};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
`

export { Button, ButtonLabel }
