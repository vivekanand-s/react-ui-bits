import styled from 'styled-components'

const Label = styled.label`
    display: inline-flex;
    font-family: 'Roboto';
    font-size: 1rem;
    align-items: center;
    justify-content: center;

    ${props => props.styles}
`

export default Label
export { Label }
