import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styled'

/**
 * TypoGraphy base component
 */

const TypoGraphy = React.forwardRef((props, ref) => {

    const {
        children,
        component,
        variant,
        className = '',
        styles,
         ...restprops
        } = props

    return (
        <Styled.TypoGraphy ref={ref} data-test='para-root' className={`paragraph-root ${className}`} 
            as={component}  variant={variant} styles={styles} {...restprops}>
            {children}
        </Styled.TypoGraphy>
    )
})

TypoGraphy.propTypes = {
    /**
     * Content for the paragraph
     */
    children: PropTypes.node,
    /**
     * Font size of the paragraph
     */
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    /**
     * Renders element with specifed tag
     */
    component: PropTypes.string,
    /**
     * Custom styles for the element
     */
    styles: PropTypes.object
}

export default TypoGraphy
export { TypoGraphy }
