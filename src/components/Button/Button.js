import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton, StyledButtonLabel } from './styled'
import THEME from './Theme' 

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
        <StyledButton theme={THEME[variant][color]} className='button-root' data-test='button-root' 
            ref={ref} variant={variant} color={color} as={tagName} {...restprops}>

            <StyledButtonLabel className='button-label' data-test='button-label'>
                {children}
            </StyledButtonLabel>

        </StyledButton>
    )
})

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    tagName: PropTypes.string,
    variant: PropTypes.oneOf(['contained', 'outlined', 'defaults']),
    onClick: PropTypes.func,
    href: (props) => {
        if(props.tagName && props.tagName.toLowerCase() === 'a' && !(props.href)) {
            throw new Error('href shoud be specified for <a> tag')
        }
    },
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element)})
    ])
}

export default Button
export { Button }