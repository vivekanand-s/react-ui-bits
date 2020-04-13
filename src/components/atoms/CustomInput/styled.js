import { css } from 'styled-components'

import {
    TEXTFIELD_COLOR,
    ERROR_COLOR,
    PRIMARY_COLOR
} from '@config/styles'

const SharedStyle = css`
    ${props => props.error && css`
        width: 99%;
    `};
    &:focus {
        width: 99%;
    }
`

const DefaultStyles = css`

    ${SharedStyle};

    ${props => props.error && css`
        border: 2px solid ${ERROR_COLOR};
    `};
    ${props => props.animateBorder && css`
        &:focus {
            border: 2px solid ${PRIMARY_COLOR};
        }
    `}
`

const StandardStyles = css`
    border: none;
    border-bottom: 1px solid ${TEXTFIELD_COLOR};
    ${SharedStyle};

    ${props => props.error && css`
        border-bottom: 2px solid ${ERROR_COLOR};
    `}
    ${props => props.animateBorder && css`
        &:focus {
            border-bottom: 2px solid ${PRIMARY_COLOR};
        }
    `}
`

const OutlinedStyles = css`
    ${DefaultStyles}
`

const RoundedStyles = css`
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 50px;
    padding-left: 0.5em;
    box-shadow: 1px 2px 1px rgba(0,0,0,0.15);
    transition: all ease 500ms;

    ${props => props.error && css`
        width: 99%;
        border: 2px solid ${ERROR_COLOR};
    `}
    ${props => props.animateBorder && css`
        &:focus {
            box-shadow: 4px 4px 5px rgba(0,0,0,0.15);
        }
    `}    
`

export { DefaultStyles, StandardStyles, OutlinedStyles, RoundedStyles }
