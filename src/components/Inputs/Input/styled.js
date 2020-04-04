import styled from 'styled-components'

import { TEXTFIELD_COLOR } from '@components/styles'

const StyledInput = styled.input`
    outline: none;
    font-family: 'Roboto';
    font-size: 1rem;
    border: 1px solid ${TEXTFIELD_COLOR};
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    width: 100%;
	margin: 0;
	padding: 0;
`

export { StyledInput }
