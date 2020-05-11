import React from 'react'
import PropTypes from 'prop-types'

import { StyledContent as Styled } from './styled'
import { FlexBox, TypoGraphy } from '@components/atoms'
import { PRIMARY_COLOR } from '@config/styles'

const TileContent = React.forwardRef((props, ref) => {
    const {
        bgcolor = PRIMARY_COLOR,
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

TileContent.propTypes = {
    /**
     * Size of the tile
    */
    xs: PropTypes.number,
    /**
     * Background color of the tile
     */
    bgcolor: PropTypes.string,
    /**
     * Is true, arrow will be shown between tile image and content
     */
    showArrow: PropTypes.string,
    /**
     * If true, content will be shown on left and image on right
     */
    reverse: PropTypes.string,
    /**
     * Title for the tile
     */
    title: PropTypes.string,
    /**
     * Main content of the tile
     */
    text: PropTypes.string,
    /**
     * Styles for the image tiles
     */
    styles: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]) 
}

export default TileContent
export { TileContent }
