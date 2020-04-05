import { css } from 'styled-components'

import {
    TEXTFIELD_COLOR,
    ERROR_COLOR,
    PRIMARY_COLOR
} from '@config/styles'

const DefaultStyles = css`

    ${props => props.error && css`
        border: 2px solid ${ERROR_COLOR};
    `};

    &:focus {
        border: 2px solid ${PRIMARY_COLOR};
    }
`

const StandardStyles = css`
    border: none;
    border-bottom: 1px solid ${TEXTFIELD_COLOR};

    ${props => props.error && css`
        border-bottom: 2px solid ${ERROR_COLOR};
    `}
`

const OutlinedStyles = css`
    ${DefaultStyles}
`

export { DefaultStyles, StandardStyles, OutlinedStyles }
