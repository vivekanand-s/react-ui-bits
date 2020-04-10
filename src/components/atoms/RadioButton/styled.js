import styled, { css, keyframes } from 'styled-components'

import { TEXTFIELD_COLOR, RippleAnimation } from '@config/styles'

const ShowBorderAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`
const HideBorderAnimation = keyframes`
    to {
        stroke-dashoffset: -145;
    }
`
const ScaleRadioAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
    100% 
    { 
        transform: scale(1); 
    }
`
//incase of issue change to label
const RadioWrapper = styled.span`
	position: relative;
    height: ${props => props.height};
	width: ${props => props.width};
`

const RadioBtnStyles = css`
	height: 100%;
	border: 0;
	border-radius: 50%;

	&:hover {
		animation: ${RippleAnimation} 250ms ease forwards;
	}

	&:checked + svg .svg-circle-1 {
		animation: ${HideBorderAnimation} 1s ease forwards;
	}
	&:checked + svg .svg-circle-2 {
		opacity: 1;
		animation: ${ScaleRadioAnimation} 500ms ease;
	}
	&:checked + svg .svg-circle-3 {
		animation: ${ShowBorderAnimation} 1s ease forwards;
	}
`

const SVGStyles = css`

    & svg {
		position: absolute;
		top: 0;
		left: 0;
        width: 100%;
        height: auto;
		pointer-events: none;
	}
    & .svg-circle-1, & .svg-circle-3 {
		fill: none;
		stroke: ${TEXTFIELD_COLOR};
		stroke-width: 2;
		stroke-linecap: round;
		stroke-dasharray: 145;
		stroke-dashoffset: 0;
	}
    & .svg-circle-2 {
		fill: #1976d2;
		opacity: 0;
		transform-origin: 50% 50%;
		transition: opacity .5s ease-in;
	}
    & .svg-circle-3 {
		stroke-dasharray: 145;
		stroke-dashoffset: 145;
		stroke: #1976d2;
	}
`

export { RadioBtnStyles, SVGStyles, RadioWrapper }