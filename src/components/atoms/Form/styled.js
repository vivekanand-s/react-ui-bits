import styled from 'styled-components'

const Form = styled.form`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
`

export const StyledForm = { Form }
