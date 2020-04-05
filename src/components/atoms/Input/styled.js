import styled, { css } from 'styled-components'

import { TEXTFIELD_COLOR, PRIMARY_COLOR, ERROR_COLOR } from '@config/styles'

const Input = styled.input`
    outline: none;
    font-family: 'Roboto';
    font-size: 1rem;
    border: 1px solid ${TEXTFIELD_COLOR};
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    height: ${props => props.height || '1.1875em'} ;
    width: ${props => props.width || '100%'};
	margin: ${props => props.margin || 0 };
	padding: ${props => props.padding || '0.5rem 0 0.5rem 0.35rem' };

    ${props => props.styles};
`

export { Input }
