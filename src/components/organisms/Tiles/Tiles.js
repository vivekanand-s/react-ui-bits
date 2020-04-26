import React from 'react'
import PropTypes from 'prop-types'

import { StyledTiles as Styled } from './styled'
import { renderImage, renderContent, checkTypeOf } from './renderTile'
import { FlexBox } from '@components/atoms'
import { PRIMARY_COLOR, PRIMARY_BTN_COLOR } from '@config/styles'

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

const Tiles = React.forwardRef((props, ref) => {
    const {
        items: { 
            bgcolor = PRIMARY_COLOR,
            color = PRIMARY_BTN_COLOR,
            btnOnHover = false,
            showArrow = false,
            reverse = false,
            contents = []
        },
        className = 'tiles'
    } = props
    const aggregatedItems = aggregateContents(contents)

    return(
        <FlexBox container ref={ref} className={className}>
            {
                Object.entries(aggregatedItems).map(([key, value], index) => (
                    <FlexBox container key={index} className={`col-${key}`} styles={Styled.TileStyles} wrap='wrap'>
                        {
                            value.map((content, index) => (
                                <FlexBox container key={`${content.colum}${index}`} className={content.className}  href={content.link || '#'} 
                                    component='a' background={content.bgcolor || bgcolor} Color={content.color || color} 
                                    reverse={checkTypeOf(content.reverse, reverse)} btnOnHover={checkTypeOf(content.btnOnHover, btnOnHover)}
                                    styles={[Styled.TileItemStyles, content.styles]}>
                                    {
                                        content.image && renderImage(content, {
                                            btnOnHover
                                        })
                                    }
                                    {
                                        (content.title || content.text) && renderContent(content, {
                                            bgcolor,
                                            showArrow,
                                            reverse
                                        })
                                    }
                                </FlexBox>
                            ))
                        }
                    </FlexBox>
                ))
            }    
        </FlexBox>
    )
})

Tiles.propTypes = {}

export default Tiles
export { Tiles }
