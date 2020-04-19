import React from 'react'
import PropTypes from 'prop-types'

import { StyledNavBar as Styled } from './styled'

const bindEvents = (events) => {
    // Object.keys(events).map(key => {
    //     console.log("key", key)
    //     console.log("value", events[key])
    //     return key = events[key]
    // })
    return {onClick: () => alert()}
}

const NavBar = React.forwardRef((props, ref) => {
    
    const {
        items = [],
        className = '',
        styles,
        color,
        background,
        ...restprops
    } = props
    
    return (
        <nav ref={ref} data-test='navbar-root' className={`navbar ${className}`} 
            style={styles} {...restprops}>
            <Styled.UL color={color} background={background}>
                {
                    items.map((item, index) => (
                        <Styled.LI key={`${item.name}-${index}`} className={`nav-link-${item.name}`} 
                            {...item.events}
                        >
                            {item.link ? 
                                <Styled.Anchor href={item.link}>{item.value}</Styled.Anchor> :
                                item.value
                            }
                        </Styled.LI>
                    ))
                }
            </Styled.UL>
        </nav>
    )
})

NavBar.propTypes = {
    /**
     * Array of navigation items to be rendered
     */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), 
            link: PropTypes.string,
            events: PropTypes.object
        })
    ),
    /**
     * Custom styles for the component
     */
    styles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element)})
    ])
}

export default NavBar
export { NavBar }
