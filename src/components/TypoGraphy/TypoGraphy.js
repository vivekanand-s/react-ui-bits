import React from 'react'
import PropTypes from 'prop-types'

import { StyledTypoGraphy } from './styled'

const TypoGraphy = React.forwardRef((props, ref) => {

    const { children, component, variant, ...restprops } = props

    return (
        <StyledTypoGraphy data-test='para-root' className='para-root' as={component}  variant={variant} {...restprops}>
            {children}
        </StyledTypoGraphy>
    )
})

TypoGraphy.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    component: PropTypes.string
}

export default TypoGraphy
export { TypoGraphy }
