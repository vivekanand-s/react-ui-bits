import React, { createRef } from 'react'

import { StyledAOS as Styled } from './styled'
import { FlexBox } from '@components/atoms'
import { TileImage, TileContent } from '@components/molecules'
import { AOS_HOC } from '@utils/AOS'

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
                                    <AOS_HOC aosref={image_ref} styles={AOS_styles} options={options}>
                                        <TileImage ref={image_ref} xs={xs} imageurl={content.image} alt={content.alt} 
                                            styles={Styled.ImageStyles}
                                        />
                                    </AOS_HOC>
                                )
                            }
                            {
                                (content.title || content.text) && (
                                    <AOS_HOC aosref={content_ref} styles={AOS_styles} options={options}>
                                        <TileContent ref={content_ref} xs={xs} title={content.title} text={content.text} 
                                            styles={[Styled.ContentStyles, content.styles]}
                                        />
                                    </AOS_HOC>
                                )
                            }
                        </FlexBox>
                    )
                })
            }
        </FlexBox>
    )
})

export default AOSTile
export { AOSTile }
