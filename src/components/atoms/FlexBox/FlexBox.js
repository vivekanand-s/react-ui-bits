import React from 'react'
import PropTypes from 'prop-types'

import { StyledFlexBox as Styled } from './styled'

const clsx = (container, item, className) => {
    let cls = (container ? 'container' : (item ? 'item' : ''))
    cls = `flexbox flex-${cls} ${className}`
    return cls.trim()
}

const FlexBox = React.forwardRef((props, ref) => {

    const {
        children,
        className = '',
        container,
        item,
        xs,
        styles,
        ...restprops
    } = props
    const xs_width = (item && xs && xs >= 0 && xs <= 12) ? (xs / 12) * 100 : ''
    const cls = clsx(container, item, className)

    return(
       <Styled.FlexBox container={container} ref={ref} data-test='flexbox-root' xs={xs_width} 
            className={cls} styles={styles} {...restprops}>
           {children}
       </Styled.FlexBox>
    )
})

FlexBox.propTypes = {
    /**
     * Flexbox childrent to be rendered
     */
    children: PropTypes.node,
    /**
     * Property to specify whether elements should wrap or not
     */
    wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse', 'initial', 'inherit']),
    /**
     * Property to set direction of flex items 
     */
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', 'initial', 'inherit']),
    /**
     * Defines alignment of element in main-axis(horizontal axis)
     */
    justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start',
                            'end', 'left', 'right', 'unset', 'normal', 'stretch', 'safe center', 'unsafe center']),
    /**
     * Defines alignment of element in cross-axis(vertical axis)
     */
    align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'baseline', 'center', 'start', 'end', 'normal', 'initial',
                            'inherit', 'unset']),
    /**
     * Set the width of the flex item
     */
    xs: PropTypes.number,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(PropTypes.Element)})
    ])
}

export default FlexBox
export { FlexBox }
