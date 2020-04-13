import styled from 'styled-components'

import { PRIMARY_COLOR, PRIMARY_BTN_COLOR} from '@config/styles'

const Avatar = styled.div`
    display: flex;
    height: ${props => props.height || '40px'};
    width: ${props => props.width || '40px'};
    background: ${props => props.background || PRIMARY_COLOR};
    color: ${props => props.color || PRIMARY_BTN_COLOR};
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    
    ${props => props.styles}

    & img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
`

export { Avatar } 