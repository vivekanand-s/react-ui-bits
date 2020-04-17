import styled, { css } from 'styled-components'

const FlexBox = styled.div`
    ${props => props.container && css`
        display: flex;
        flex-direction: ${props => props.direction};
        justify-content: ${props => props.justify};
        align-items: ${props => props.align};
        flex-wrap: ${props => props.wrap || 'wrap'};
        height: ${props => props.height};
        width: ${props => props.width};
        box-sizing: border-box;
    `}

    ${props => (props.xs) && css`
        flex-grow: 0;
        flex-basis: ${props.xs}%;
        max-width: ${props.xs}%;
        padding: 0.5rem;
        box-sizing: border-box;
    `};

    ${props => props.styles};
`

export const StyledFlexBox = { FlexBox }