import styled from 'styled-components'

import { TEXTFIELD_COLOR } from '@config/styles'

const Input = styled.input`
    outline: none;
    font-size: 1rem;
    border: 1px solid ${TEXTFIELD_COLOR};
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    height: ${props => props.height || '100%'} ;
    width: ${props => props.width || '100%'};
	margin: ${props => props.margin || 0 };
	padding: ${props => props.padding || '0.5rem 0 0.5rem 0.35rem' };
    box-sizing: border-box;
    
    ${props => props.styles};
`

export { Input }
