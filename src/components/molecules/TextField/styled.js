import styled, { css } from 'styled-components'

import { TEXTFIELD_COLOR, PRIMARY_COLOR } from '@config/styles'

const SharedStyle = css`
    position: absolute;
    top: 0;
    left: 0;
`

const Wrapper = styled.label`
    height: 45px;
    width: 100%;
    margin: 8px 0;
    display: inline-flex;
    position: relative;
`

const LabelStyles = css`
    
    ${SharedStyle};

    pointer-events: none;
    
    ${props => props.variant === 'default' && css`
        transform: translate(5px, 13px) scale(1);
    `};

    ${props => props.variant === 'standard' && css`
        transform: translate(0px, 15px) scale(1);
    `};

    ${props => props.variant === 'outlined' && css`
        transform: translate(5px, 13px) scale(1);
        background-color: #FFF;
    `};

    transition: transform .3s ease-in-out;
`

const StandardFocusStyles = css`
    padding: 10px 0 0;

    &:focus + label {
        transform: translate(-3px, -6px) scale(0.85);
        color: ${PRIMARY_COLOR};
    }

    &:not(:placeholder-shown) + label {
        transform: translate(-3px, -6px) scale(0.85);
        color: ${TEXTFIELD_COLOR};
    }

    &:focus ~ span {
        width: 100%;
    }
`

const DefaultFocusStyles = css`
    &:focus + label {
        transform: translate(5px, 20px) scale(0);
    }

    &:not(:placeholder-shown) + label {
        transform: scale(0);
    }
`

const OutlinedFocusStyles = css`
    border-radius: 3px;

    &:focus + label {
        transform: translate(5px, -7px) scale(0.85);
        padding: 0 5px;
        color: ${PRIMARY_COLOR};
    }

    &:not(:placeholder-shown) + label {
        transform: translate(5px, -7px) scale(0.85);
        padding: 0 5px;
        color: ${TEXTFIELD_COLOR};
    }
`

const Border = styled.span`
    
    ${SharedStyle};
    
    top: auto;
    bottom: -0.5px;
    width: 0;
    height: 2px;
    background-color: ${PRIMARY_COLOR};
    transition: width .3s ease-in-out ;
`

export { 
    Wrapper,
    Border,
    LabelStyles,
    StandardFocusStyles,
    DefaultFocusStyles,
    OutlinedFocusStyles
}
