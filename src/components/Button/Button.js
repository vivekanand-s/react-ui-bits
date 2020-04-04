import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styled'
import THEME from './theme' 

/**
 * Button Component
 */
const Button = React.forwardRef((props, ref) => {

    const { 
        color = 'defaults',
        href = undefined,
        tagName = 'button',
        variant = 'defaults',
        children,
        ...restprops
    } = props
    
    return (
        <Styled.Button theme={THEME[variant][color]} className={`btn btn-${color}`} data-test='button-root' 
            ref={ref} variant={variant} color={color} as={tagName} {...restprops}>
            <Styled.ButtonLabel className='button-label' data-test='button-label'>
                {children}
            </Styled.ButtonLabel>
        </Styled.Button>
    )
})

Button.propTypes = {
    /**
     * Button name
     */
    children: PropTypes.node.isRequired,
    /**
     * Color of the button
     */
    color: PropTypes.oneOf(['primary', 'disabled', 'defaults']),
    /**
     * Variant of the button
     */
    variant: PropTypes.oneOf(['contained', 'outlined', 'defaults']),
    /**
     * Callback fired when the button is clicked
     */
    onClick: PropTypes.func,
    /**
     * Button can be rendered as anchor tag, if tagname is provided as 'a'
     */
    tagName: PropTypes.string,
    /**
     * Link to be provided if button is rendered as anchor
     */
    href: (props) => {
        if(props.tagName && props.tagName.toLowerCase() === 'a' && !(props.href)) {
            throw new Error('href shoud be specified for <a> tag')
        }
    },
    /**
     * Passes ref to the button element
     */
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element)})
    ])
}

export default Button
export { Button }