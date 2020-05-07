import React from 'react'

import { StyledTileImage as Styled } from './styled'
import { FlexBox, Button } from '@components/atoms'

const TileImage = React.forwardRef((props, ref) => {
    const {
        xs = 12,
        btnOnHover = false,
        imageurl = '',
        alt = '',
        content = {},
        styles = {},
        ...restprops
    } = props

    return (
        <FlexBox item ref={ref} xs={xs} className='tile-img' styles={[Styled.TileImageStyles, styles]} src={imageurl} 
        alt={alt} {...restprops}>
            {
                (btnOnHover && content.name) && (
                    <Styled.Cover>
                        <Button className='content-btn' variant='outlined' {...content.events} styles={Styled.ButtonStyles}>
                            {content.name}
                        </Button>
                    </Styled.Cover>
                )
            }
        </FlexBox>
    )
})

export default TileImage
export { TileImage }
