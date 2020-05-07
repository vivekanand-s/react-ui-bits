import React from 'react'

import { StyledContent as Styled } from './styled'
import { FlexBox, TypoGraphy } from '@components/atoms'

const TileContent = React.forwardRef((props, ref) => {
    const {
        bgcolor = 'transparent',
        showArrow = false,
        reverse = false,
        title = '',
        text = '',
        xs = 12,
        styles = {},
        ...restprops
    } = props
    const Arrow = (reverse ? Styled.RightArrow : Styled.LeftArrow)

    return (       
        <FlexBox container ref={ref} xs={xs} className='tile-text-wrap' justify='center' align='center' 
        styles={[Styled.WrapperStyles, styles]} {...restprops}>
            <div className='tile-text' style={{padding: '0'}}>
                <TypoGraphy variant="h5">{title}</TypoGraphy>
                <TypoGraphy variant="body2">{text}</TypoGraphy>
                {
                    showArrow && <Arrow background={bgcolor} />
                }
            </div>  
        </FlexBox>
    )
})

export default TileContent
export { TileContent }
