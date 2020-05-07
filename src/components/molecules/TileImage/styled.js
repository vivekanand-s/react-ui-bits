import styled, { css } from 'styled-components'

const Cover = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`

const TileImageStyles = css`
    position: relative;
    padding: 0;
    width: 50%;
    background-image: url(${props => props.src});
    background-color: #999;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
` 

const ButtonStyles = css`
    position: absolute;
    left: 50%;
    color: #fff;
    top: 50%;
    transform: translate(-50%, -50%);
    border-color: #fff;
`

export const StyledTileImage = { ButtonStyles, Cover, TileImageStyles }