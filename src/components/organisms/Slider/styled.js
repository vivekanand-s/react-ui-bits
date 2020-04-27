import { css } from 'styled-components'

const SliderStyles = css`
    position: relative;
    transform: ${props => props.infinite ? 'translateX(-100%)' : 'translateX(0%)'};
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: ease;
    -webkit-overflow-scrolling: touch;
`

const SlideStyles = css`
    min-width: ${props => props.width};
    cursor: pointer;
`

const ImageStyles = {
    width: '100%',
    height: '100%'
}

const PrevStyles = css`
    position: absolute;
    top: 0%;
    left: 0%;
`
const NextStyles = css`
    left: auto;
    right: 0%;
`


export const StyledSlider = { SliderStyles, SlideStyles, ImageStyles, PrevStyles, NextStyles }