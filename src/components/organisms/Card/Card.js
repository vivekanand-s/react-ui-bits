import React from 'react'
import PropTypes from 'prop-types'

import { StyledCard as Styled } from './styled'

const Card = React.forwardRef((props, ref) => {
    const {
        styles,
        children,
        className = '',
        ...restprops
    } = props
    
    return(
        <Styled.Card ref={ref} data-test='card-root' className={`card ${className}`} styles={styles} {...restprops}>
            {children}
        </Styled.Card>
    )
})

Card.propTypes = {
    /**
     * Renders content of card component.
     */
    children: PropTypes.node,
    /**
     * Custom styles for the card.
     */
    styles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    /**
     * Width of the card
     */
    width: PropTypes.string
}

export default Card
export { Card }
