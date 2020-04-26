import React from 'react'

import { StyledTiles as Styled } from './styled'
import { FlexBox, Button, TypoGraphy } from '@components/atoms'

const checkTypeOf = (content, defaults) => {
    return typeof(content) !== 'undefined' ? content : defaults
}

const renderImage = (content, defaults) => {
    const xs = (content.title || content.text) ? 6 : 12

    return (
        <FlexBox item className='content-img' xs={xs} styles={Styled.TileItemStyles}>
            <img src={content.image} alt={content.alt || ''} style={{width: '100%', height: '100%'}}/>
            {
                checkTypeOf(content.btnOnHover, defaults.btnOnHover) && (
                    <Styled.Cover>
                        <Button className='content-btn' variant='outlined' {...content.button.events}
                            styles={Styled.ButtonStyles}>
                            {content.button.name}
                        </Button>
                    </Styled.Cover>
                )
            }
        </FlexBox>
    )
}

const renderContent = (content, defaults) => {
    const xs = (content.image) ? 6 : 12
    const reverse = checkTypeOf(content.reverse, defaults.reverse)
    const Arrow = reverse ? Styled.RightArrow : Styled.LeftArrow
    
    return (
        <FlexBox container xs={xs} className='content-text-wrap' justify='center' align='center' styles={{position: 'relative'}}>
            <div className='content-text' style={{padding: '0'}}>
                <TypoGraphy variant="h5">{content.title}</TypoGraphy>
                <TypoGraphy variant="body2">{content.text}</TypoGraphy>
                {
                    checkTypeOf(content.showArrow, defaults.showArrow) && (
                        <Arrow background={content.bgcolor || defaults.bgcolor} />
                    )
                }
            </div>  
        </FlexBox>
    )
}

export { renderImage, renderContent, checkTypeOf }