import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.875rem;
    box-sizing: border-box;
    background-color: #ffffff;
    width: ${props => props.width || '100%'};

    & .avatar {
        margin-right: 0.875rem;
    }

    ${props => props.styles};
`

export const StyledCardHeader = { Wrapper }