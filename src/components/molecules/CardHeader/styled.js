import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.875rem;
    box-sizing: border-box;
    width: ${props => props.width || '100%'};

    ${props => props.styles};
`

export { Wrapper }