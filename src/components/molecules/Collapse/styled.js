import styled from 'styled-components'

const Wrapper = styled.div`
    transition-property: height;
    transition-duration: ${props => `${props.timeout}ms`};
    transition-timing-function: ease-in;
    height: 0;
    overflow: hidden;
`

const InnerWrap = styled.div`
    display: flex;
`

export { Wrapper, InnerWrap }