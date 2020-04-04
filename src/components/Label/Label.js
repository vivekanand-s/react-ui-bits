import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabel } from './styled'

const Label = React.forwardRef((props, ref) => {

    const { children, ...restprops } = props

    return (
        <StyledLabel data-test='label-root' className='label-root' ref={ref} {...restprops}>
            {children}
        </StyledLabel>
    )
})

Label.propTypes = {
    children: PropTypes.node
}

export default Label
export { Label }
