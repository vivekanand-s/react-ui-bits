import { css } from 'styled-components'

const ImageStyles = css`
    transform: translateX(-250px);
    opacity: 0;
    transition: opacity 250ms ease-in, transform ${props => props.duration}ms ease-in;
`
const ContentStyles = css`
    padding: 2rem;
    transform: translateX(250px);
    opacity: 0;
    transition: opacity 250ms ease-in, transform ${props => props.duration}ms ease-in;
`
const WrapperStyles = css`
    width: 100%;
    min-height: 200px;
`


export const StyledAOS = { ImageStyles, ContentStyles, WrapperStyles }