import styled from 'styled-components'

import { PRIMARY_COLOR, PRIMARY_BTN_COLOR } from '@config/styles'

const Header = styled.header`
    display: flex;
    background: ${props => props.background || PRIMARY_COLOR};
    color: ${props => props.color || PRIMARY_BTN_COLOR};
    padding: 1rem 2rem;
    box-sizing: border-box;

    ${props => props.styles};
`

const style = {
    logo: {
        marginRight: '1rem',
        borderRadius: '0'
    }
}

export const StyledHeader = { Header, style }