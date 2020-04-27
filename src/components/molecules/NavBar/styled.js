import styled from 'styled-components'

import { DEFAULT_BTN_COLOR } from '@config/styles'

const UL = styled.ul`
    background: ${props => props.background || 'transparent'};
    color: ${props => props.color || DEFAULT_BTN_COLOR};
    list-style-type: none;
    padding: 0;
    margin: 0;

    ${props => props.styles}
`

const LI = styled.li`
    padding: 0.5rem;
    margin: 0 1rem;
    display: inline-block;
    cursor: pointer;
`
const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
`

export const StyledNavBar = { UL, LI, Anchor }