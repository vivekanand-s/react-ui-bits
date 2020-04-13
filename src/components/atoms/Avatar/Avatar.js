import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styled'

const Avatar = React.forwardRef((props, ref) => {
    const {
        src,
        alt = '',
        children,
        className = '',
        styles,
        ...restprops
    } = props

    return(
        <Styled.Avatar ref={ref} data-test='avatar-root' className={`avatar ${className}`} styles={styles} {...restprops}>
            {
                src ? <img src={src} alt={alt} /> : children
            }
        </Styled.Avatar>
    )
})

Avatar.propTypes = {
    /**
     * Url for avatar image
     */
    src: PropTypes.string,
    /**
     * Alternate text for image, incase image failed to load
     */
    alt: PropTypes.string,
    /**
     * Node to be rendered
     */
    children: PropTypes.node,
    /**
     * Background color for avatar
     */
    background: PropTypes.string,
    /**
     * Color for avatar text
     */
    color: PropTypes.string,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element)})
    ]) 
}

export default Avatar
export { Avatar }
