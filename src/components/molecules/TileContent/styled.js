import styled, { css } from 'styled-components'

const WrapperStyles = css`
    position: relative;
    word-break: break-word;
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

export const StyledContent = { WrapperStyles, LeftArrow, RightArrow }