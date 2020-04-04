import styled, { keyframes } from 'styled-components'

import { Input } from '@components/Input/styled'
import { StyledLabel } from '@components/Label'
import { TEXTFIELD_COLOR, PRIMARY_COLOR, RippleAnimation } from '@config/styles'

const DashAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`

const StyledCheckBox = styled(Input)`
	border: 0;
	border: 1px solid ${TEXTFIELD_COLOR};
	border-radius: 2px;

	&:hover {
		animation: ${RippleAnimation} 250ms ease forwards;
	}
	&:checked + svg {
		background: ${PRIMARY_COLOR};
	}
	&:checked + svg path {
		animation: ${DashAnimation} 1s linear forwards;
		animation-delay: .15s;
	}
`

const StyledCheckBoxWrap = styled.span`
	position: relative;
    height: ${props => props.height};
	width: ${props => props.width};
`

const StyledBoxWrap = styled(StyledLabel)`

    & svg {
		background: transparent;
		height: auto;
		width: 100%;
		stroke: #FFF;
		stroke-width: 3;
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
		transition: background .5s ease;
		border-radius: 2px;
	}
	& path {
		fill: none;
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
	}
`

export { StyledBoxWrap, StyledCheckBox, StyledCheckBoxWrap }
