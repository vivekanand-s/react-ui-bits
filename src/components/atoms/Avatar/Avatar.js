import React from 'react'
import PropTypes from 'prop-types'

import { StyledAvatar as Styled } from './styled'

const Avatar = React.forwardRef((props, ref) => {
    const {
        src,
        alt = '',
        children,
        className = '',
        styles,
        ...restprops
    } = props
    const bg = (styles && styles.background ? styles.background : (src ? 'transparent' : ''))

    return(
        <Styled.Avatar ref={ref} data-test='avatar-root' className={`avatar ${className}`} 
            background={bg} styles={styles} {...restprops}>
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
    color: PropTypes.string
}

export default Avatar
export { Avatar }
