import styled from 'styled-components'

import { TEXTFIELD_COLOR } from '@config/styles'

const Input = styled.input`
    outline: none;
    font-family: 'Roboto';
    font-size: 1rem;
    border: 1px solid ${TEXTFIELD_COLOR};
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    height: ${props => props.height || '100%'} ;
    width: ${props => props.width || '100%'};
	margin: 0;
	padding: 0;
`

export { Input }
