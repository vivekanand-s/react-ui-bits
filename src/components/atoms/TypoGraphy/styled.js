import styled from 'styled-components'

const fontSizes = {
    'h1': '6rem', 
    'h2': '3.75rem',
    'h3': '3rem',
    'h4': '2.125rem',
    'h5': '1.5rem',
    'h6': '1rem',
    'body1': '1rem',
    'body2': '0.875rem'
}

const TypoGraphy = styled.p`
    font-size: ${props => props.variant ? fontSizes[props.variant] : '1rem'};
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    
    ${props => props.styles}
`

export { TypoGraphy }
