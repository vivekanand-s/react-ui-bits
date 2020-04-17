import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader as Styled } from './styled'
import { FlexBox, TypoGraphy, Avatar } from '@components/atoms'

const { style } = Styled

const Header = React.forwardRef((props, ref) => {
    const {
        logo,
        logoalt,
        logotext,
        styles,
        className = '',
        navbar,
        justify = 'space-between',
        ...restprops
    } = props

    return (
        <Styled.Header ref={ref} data-test='header-root' className={`header ${className}`} 
            styles={styles} {...restprops}>
            <FlexBox container styles={style.container} align='center' justify={justify}>
                
                <FlexBox container align='center'>
                    { logo && <Avatar src={logo} alt={logoalt} styles={style.logo} /> }
                    { logotext && <TypoGraphy as='h1' variant='h5'>{logotext}</TypoGraphy> }
                </FlexBox>
                {
                    navbar && 
                    <FlexBox item>
                        {navbar}
                    </FlexBox>
                }
            </FlexBox>
        </Styled.Header>
    )
})

Header.propTypes = {
    /**
     * Defines logo image.
     */
    logo: PropTypes.string,
    /**
     * Defines alternate text for logo image.
     */
    logoalt: PropTypes.string,
    /**
     * Defines company name
     */
    logotext: PropTypes.string,
    /**
     * Navigation menus on the header
     */
    navbar: PropTypes.node,
    /**
     * Background color of the header
     */
    background: PropTypes.string,
    /**
     * Text color for the header
     */
    color: PropTypes.string,
    /**
     * To align items on the header, it supports values flexbox justify-content property.
     */
    justify: PropTypes.string,
    /**
     * Custom styles for the header component
     */
    styles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.elemenet)})
    ])
}

export default Header
export { Header }
