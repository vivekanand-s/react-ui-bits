import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styled'
import THEME from './theme' 

/**
 * Button base component
 */
const Button = React.forwardRef((props, ref) => {

    const { 
        color = 'defaults',
        href = undefined,
        tagName = 'button',
        variant = 'defaults',
        children,
        className =  '',
        styles,
        ...restprops
    } = props
    
    return (
        <Styled.Button theme={THEME[variant][color]} className={`btn btn-${color} ${className}`} data-test='button-root' 
            ref={ref} variant={variant} color={color} as={tagName} styles={styles} {...restprops} href={href}>
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
     * Custom Styles for button
     */
    styles: PropTypes.object,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.Element)})
    ])
}

export default Button
export { Button }