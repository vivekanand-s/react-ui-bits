import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import { StyledAOS as Styled } from './styled'
import { FlexBox } from '@components/atoms'
import { TileImage, TileContent } from '@components/molecules'
import { AOS } from '@utils/AOS'

const AOSTile = React.forwardRef((props, ref) => {
    const {
        duration = 500,
        options = {},
        contents = [],
        className = ''
    } = props
    const AOS_styles = {
        opacity: 1,
        transform: 'translateX(0)'
    }

    return (
        <FlexBox container ref={ref} className={className} styles={{width: '500px', margin: '0 auto'}}>
            {
                contents.map((content, index) => {
                    const image_ref = createRef(null)
                    const content_ref = createRef(null)
                    const xs = (content.image ? 6 : 12)

                    return (
                        <FlexBox container key={index} className={content.className || ''} styles={Styled.WrapperStyles}>
                            {
                                content.image && (
                                    <AOS aosref={image_ref} styles={AOS_styles} options={options}>
                                        <TileImage ref={image_ref} xs={xs} imageurl={content.image} alt={content.alt} 
                                            duration={duration} styles={Styled.ImageStyles}
                                        />
                                    </AOS>
                                )
                            }
                            {
                                (content.title || content.text) && (
                                    <AOS aosref={content_ref} styles={AOS_styles} options={options}>
                                        <TileContent ref={content_ref} xs={xs} title={content.title} text={content.text} 
                                            duration={duration} styles={[Styled.ContentStyles, content.styles]}
                                        />
                                    </AOS>
                                )
                            }
                        </FlexBox>
                    )
                })
            }
        </FlexBox>
    )
})

AOSTile.PropTypes = {
    /**
     * Animation duration for the tiles in ms.
     */
    duration: PropTypes.number,
    /**
     * Class name for the AOS content
     */
    className: PropTypes.string,
    /**
     * Intersection options.
     * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     */
    options: PropTypes.shape({
        root: PropTypes.node,
        threshold: PropTypes.number,
        rootMargin: PropTypes.string
    }),
    contents: PropTypes.shape({
        /**
         * Image url for the tile.
         */
        image: PropTypes.string,
        /**
         * Alternate text for the image
         */
        alt: PropTypes.string,
        /**
         * Title for the tile
         */
        title: PropTypes.string,
        /**
         * Main content of the tile
         */
        text: PropTypes.string,
        /**
         * Main content of the tile
         */
        className: PropTypes.string
    })
}

export default AOSTile
export { AOSTile }
