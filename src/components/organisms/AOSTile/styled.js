import { css } from 'styled-components'

const setTransform = (direction) => {
    switch(direction) {
        case 'left':
            return 'translateX(-250px)'
            break
        case 'right':
            return 'translateX(250px)'
            break
        default:
            return 'translateX(-250px)'
    }
}

const ImageStyles = css`
    transform: ${props => setTransform(props.animate)};
    opacity: 0;
    transition: opacity 250ms ease-in, transform ${props => props.duration}ms ease-in;
`
const ContentStyles = css`
    padding: 2rem;
    transform: ${props => setTransform(props.animate)};
    opacity: 0;
    transition: opacity 250ms ease-in, transform ${props => props.duration}ms ease-in;
`
const WrapperStyles = css`
    width: 100%;
    min-height: 200px;
`


export const StyledAOS = { ImageStyles, ContentStyles, WrapperStyles }