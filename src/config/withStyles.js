import React from 'react'
import styled, {css} from 'styled-components'

const withStyles = (component, styles ) => {
    const StyledComponent = styled(component)`
        ${styles}
    `

    return <StyledComponent {...props} />
}

export default withStyles