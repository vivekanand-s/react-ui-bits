import styled, { css } from 'styled-components'

const TileStyles = css`
    width: 50%;
`

const Cover = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`

const TileItemStyles = css`
    position: relative;
    padding: 0;
    background: ${props => props.background};
    color: ${props => props.Color};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    text-decoration: none;

    ${props => props.btnOnHover && css`
        &:hover .content-img ${Cover} {
            display: block;
        }
    `}
`

const LeftArrow = styled.span`
    width: 0;
    height: 0;
    border-width: 15px;
    border-style: solid;
    border-color: ${props => props.background};
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-width: 0;
    position: absolute;
    top: 50%;
    left: -15px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

const RightArrow = styled(LeftArrow)`
    border-left-width: 15px;
    border-right-width: 0;
    left: auto;
    right: -15px;
`

const ButtonStyles = css`
    position: absolute;
    left: 50%;
    color: #fff;
    top: 50%;
    transform: translate(-50%, -50%);
    border-color: #fff;
`

export const StyledTiles = { TileStyles, TileItemStyles, LeftArrow, RightArrow, ButtonStyles, Cover }