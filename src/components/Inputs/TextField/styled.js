import styled, { css } from 'styled-components'

import { StyledLabel } from '@components/Label'
import { StyledInput } from '@components/Inputs/Input'
import { TEXTFIELD_COLOR, PRIMARY_COLOR } from '@components/styles'

const SharedStyle = css`
    position: absolute;
    top: 0;
    left: 0;
`

const StyledWrap = styled.div`
    height: 45px;
    margin: 8px;
    display: inline-flex;
    position: relative;
`

const StyledInputLabel = styled(StyledLabel)`
    
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

const StyledStandardInput = styled(StyledInput)`
    border: none;
    padding-top: 0.825rem;
    height: auto;
    border-bottom: 1px solid ${TEXTFIELD_COLOR};

    ${props => props.error && css`
        border-bottom: 2px solid #f44336;
    `}

    &:focus + ${StyledInputLabel} {
        transform: translate(-5px, -3px) scale(0.85);
        color: ${PRIMARY_COLOR};
    }

    &:not(:placeholder-shown) + ${StyledInputLabel} {
        transform: translate(-5px, -3px) scale(0.85);
        color: ${TEXTFIELD_COLOR};
    }

    &:focus ~ div {
        width: 100%;
    }
`

const StyledDefaultInput = styled(StyledInput)`
    padding-left: 5px;
    padding-top: 0;
    height: auto;

    ${props => props.error && css`
        border: 2px solid #f44336;
    `};

    &:focus {
        border: 2px solid ${PRIMARY_COLOR};
    }
    
    &:focus + ${StyledInputLabel} {
        transform: translate(5px, 20px) scale(0);
    }

    &:not(:placeholder-shown) + ${StyledInputLabel} {
        transform: scale(0);
    }
`

const StyledOutlinedInput = styled(StyledInput)`
    padding-left: 5px;
    height: auto;

    ${props => props.error && css`
        border: 2px solid #f44336;
    `}
    
    &:focus {
        border: 2px solid ${PRIMARY_COLOR};
    }

    &:focus + ${StyledInputLabel} {
        transform: translate(5px, -7px) scale(0.85);
        padding: 0 5px;
        color: ${PRIMARY_COLOR};
    }

    &:not(:placeholder-shown) + ${StyledInputLabel} {
        transform: translate(5px, -7px) scale(0.85);
        padding: 0 5px;
        color: ${TEXTFIELD_COLOR};
    }
`

const StyledInputBorder = styled.div`
    
    ${SharedStyle};
    
    top: auto;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${PRIMARY_COLOR};
    transition: width .3s ease-in-out ;
`

export { 
    StyledWrap,
    StyledStandardInput,
    StyledDefaultInput,
    StyledOutlinedInput,
    StyledInputLabel,
    StyledInputBorder
}
