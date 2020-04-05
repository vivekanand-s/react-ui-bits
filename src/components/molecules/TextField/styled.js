import styled, { css } from 'styled-components'

import { Label } from '@components/Label/styled'
import { TEXTFIELD_COLOR, PRIMARY_COLOR } from '@config/styles'

const SharedStyle = css`
    position: absolute;
    top: 0;
    left: 0;
`

const Wrapper = styled.div`
    height: 45px;
    margin: 8px;
    display: inline-flex;
    position: relative;
`

const InputLabel = styled(Label)`
    
    ${SharedStyle};

    pointer-events: none;
    
    ${props => props.variant === 'default' && css`
        transform: translate(5px, 14px) scale(1);
    `};

    ${props => props.variant === 'standard' && css`
        transform: translate(0, 16px) scale(1);
    `};

    ${props => props.variant === 'outlined' && css`
        transform: translate(5px, 14px) scale(1);
        background-color: #FFF;
    `};

    transition: transform .3s ease-in-out;
`

const StandardFocusStyles = css`

    &:focus + label {
        transform: translate(-5px, -3px) scale(0.85);
        color: ${PRIMARY_COLOR};
    }

    &:not(:placeholder-shown) + label {
        transform: translate(-5px, -3px) scale(0.85);
        color: ${TEXTFIELD_COLOR};
    }

    &:focus ~ div {
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

const Border = styled.div`
    
    ${SharedStyle};
    
    top: auto;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${PRIMARY_COLOR};
    transition: width .3s ease-in-out ;
`

export { 
    Wrapper,
    StandardInput,
    DefaultInput,
    OutlinedInput,
    InputLabel,
    Border
}
