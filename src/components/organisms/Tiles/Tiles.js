import React from 'react'
import PropTypes from 'prop-types'

import { StyledTiles as Styled } from './styled'
import { FlexBox } from '@components/atoms'
import { TileImage,  TileContent } from '@components/molecules'

/* Function that combines content with same column into single array */
const aggregateContents = (contents) => {
    const aggregatedItems = contents.reduce((acc, item, index) => {
        let column = item.column || index + 1
        if(!Array.isArray(acc[column])) {		
            acc[column] = []
        }
        acc[column].push(item)
        return acc;
    }, {})

    return aggregatedItems
}

const checkTypeOf = (content, defaults) => {
    return typeof(content) !== 'undefined' ? content : defaults
}

const Tiles = React.forwardRef((props, ref) => {
    const {
        items: {
            bgcolor,
            color,
            btnOnHover = false,
            showArrow = false,
            reverse = false,
            contents = [],
            ...restprops
        },
        className = 'tiles'
    } = props
    const aggregatedItems = aggregateContents(contents)

    return (
        <FlexBox container ref={ref} data-test='tiles-root' className={className} {...restprops}>
            {
                Object.entries(aggregatedItems).map(([key, value], index) => (
                    <FlexBox container key={index} className={`col-${key}`} styles={Styled.TileStyles} wrap='wrap'>
                        {
                            value.map((content, index) => {
                                const xs = (content.image ? 6 : 12)
                                const flex_reverse = checkTypeOf(content.reverse || reverse)
                                const showBtnOnHover = checkTypeOf(content.btnOnHover || btnOnHover)
                                const arrow = checkTypeOf(content.showArrow || showArrow)

                                return (
                                    <FlexBox container key={index} className={content.className} href={content.link || '#'} background={content.bgcolor || bgcolor} 
                                    Color={content.color || color} reverse={flex_reverse} component='a' 
                                    styles={[Styled.TileItemStyles, content.styles]}>
                                        {
                                            content.image && 
                                                <TileImage xs={xs} content={content.button} imageurl={content.image} alt={content.alt}
                                                btnOnHover={showBtnOnHover} />
                                        }
                                        {   
                                            (content.text || content.title) &&
                                                <TileContent xs={xs} title={content.title} text={content.text} reverse={flex_reverse} showArrow={arrow}/>
                                        }    
                                    </FlexBox>
                                )
                            })
                        }
                    </FlexBox>
                ))
            }    
        </FlexBox>
    )
})

Tiles.propTypes = {
    /**
     * Background color of the tiles
     */
    bgcolor: PropTypes.string,
    /**
     * Text color of the tiles
     */
    color: PropTypes.string,
    /**
     * If true, button will be shown on hovering tiles
     */
    btnOnHover: PropTypes.bool,
    /**
     * Will show arrow on content, based on boolean value
     */
    showArrow: PropTypes.bool,
    /**
     * If true, content will be shown af left and image will be shown at right
     */
    reverse: PropTypes.bool,
    /**
     * Array of items to show tile contents
     */
    contents: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * Integer value to group contents in same column
             */
            column: PropTypes.number,
            /**
             * Image src for the tile.
             */
            image: PropTypes.string,
            /**
             * Title content for the tile.
             */
            title: PropTypes.string,
            /**
             * Text content for the tile.
             */
            text: PropTypes.string,
            /**
             * Link for the tile content.
             */
            link: PropTypes.string,
            /**
             * Class name for the tile.
             */
            className: PropTypes.string,
            bgcolor: PropTypes.string,
            color: PropTypes.string,
            btnOnHover: PropTypes.bool,
            showArrow: PropTypes.bool,
            reverse: PropTypes.bool,
            /**
             * Button object with names and events.
             */
            button: PropTypes.shape({
                name: PropTypes.string,
                events: PropTypes.object
            })
        })
    )
}

export default Tiles
export { Tiles }
