import React from 'react'
import PropTypes from 'prop-types'

import { StyledCardHeader as Styled } from './styled'
import { TypoGraphy } from '@components/atoms'

const Styles = {
    title: {
        display: 'block'
    }
}

const CardHeader = React.forwardRef((props, ref) => {
    const {
        title,
        subtitle,
        avatar,
        styles,
        ...restprops
    } = props

    return(
        <Styled.Wrapper ref={ref} data-test='cardheader-root' styles={styles} {...restprops}>
            {
                avatar ? avatar : null
            }
            <div className="card-header-txt">
                {title && <TypoGraphy variant="body1" styles={Styles.title}>{title}</TypoGraphy>}
                {subtitle && <TypoGraphy variant="body2" styles={Styles.title}>{subtitle}</TypoGraphy>}
            </div>
        </Styled.Wrapper>
    )
})

CardHeader.propTypes = {
    /**
     * width of the card
     */
    width: PropTypes.string,
    /**
     * Main title for the card
     */
    title: PropTypes.string,
    /**
     * Sub title for the card
     */
    subtitle: PropTypes.string,
    /**
     * Avatar icon for the card
     */
    avatar: PropTypes.node,
    /**
     * Custom styles for the component
     */
    styles: PropTypes.object,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element)})
    ])
}

export default CardHeader
export { CardHeader }
