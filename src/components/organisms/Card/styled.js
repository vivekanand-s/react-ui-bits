import styled from 'styled-components'

const Card = styled.div`
    width: ${props => props.width || '345px'};
    overflow: hidden;
    box-shadow: 0 0 4px 0px rgba(0,0,0,0.25);

    ${props => props.styles};
`

export const StyledCard = { Card }