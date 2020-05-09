import { css } from 'styled-components'

import { device } from '@config/styles'

const TileStyles = css`
    width: 50%;

    @media ${device.tablet} {
        width: 100%;
    }

`

const TileItemStyles = css`
    position: relative;
    padding: 0;
    background: ${props => props.background};
    color: ${props => props.Color};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    text-decoration: none;
    width: 100%;
    min-height: 200px;
    &:hover .tile-img .tile-img-cover {
        display: block;
    }
    
`

export const StyledTiles = { TileStyles, TileItemStyles }