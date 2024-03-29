import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabel as Styled } from './styled'

/**
 * Label base component
 */

const Label = React.forwardRef((props, ref) => {

    const {
        children,
        className = '',
        styles,
        ...restprops
    } = props

    return (
        <Styled.Label data-test='label-root' className={`label-root ${className}`} 
            ref={ref} styles={styles} {...restprops}>
            {children}
        </Styled.Label>
    )
})

Label.propTypes = {
    /**
     * Label children to be rendered
     */
    children: PropTypes.node,
    /**
     * Custom styles for the label
     */
    styles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
}

export default Label
export { Label }
