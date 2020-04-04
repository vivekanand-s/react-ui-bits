import { keyframes } from 'styled-components'

const PRIMARY_COLOR = '#1976d2'
const PRIMARY_BTN_COLOR = '#ffffff'
const DISABLED_COLOR = 'rgba(0, 0, 0, 0.12)'
const DISABLED_BTN_COLOR = 'rgba(0, 0, 0, 0.26)' 
const DEFAULT_COLOR = '#e0e0e0'
const DEFAULT_BTN_COLOR = 'rgba(0, 0, 0, 0.87)'
const TEXTFIELD_COLOR = 'rgba(0, 0, 0, 0.42)'

const RippleAnimation = keyframes`
	0% {
		box-shadow: 0 0 0 0px #1976d22e;
	}
	100% {
		box-shadow: 0 0 0 5px #1976d22e;
	}
`

export {
    PRIMARY_COLOR,
    PRIMARY_BTN_COLOR,
    DISABLED_COLOR,
    DISABLED_BTN_COLOR,
    DEFAULT_COLOR,
    DEFAULT_BTN_COLOR,
    TEXTFIELD_COLOR,
    RippleAnimation
}