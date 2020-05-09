import React from 'react'
import PropTypes from 'prop-types'

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
                    <Styled.Cover className='tile-img-cover'>
                        <Button className='content-btn' variant='outlined' {...content.events} styles={Styled.ButtonStyles}>
                            {content.name}
                        </Button>
                    </Styled.Cover>
                )
            }
        </FlexBox>
    )
})

TileImage.propTypes = {
    /**
     * Size of the tile
     */
    xs: PropTypes.number,
    /**
     * If true, show button over image on hover
     */
    btnOnHover: PropTypes.bool,
    /**
     * Image url for the tile
     */
    imageurl: PropTypes.string,
    /**
     * Alternate tect for the image
     */
    alt: PropTypes.string,
    /**
     * Button Object
     */
    content: PropTypes.shape({
        name: PropTypes.string,
        events: PropTypes.object
    }),
    /**
     * Styles for the image tiles
     */
    styles: PropTypes.object
}

export default TileImage
export { TileImage }
