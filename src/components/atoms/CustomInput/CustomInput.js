import React from 'react'
import styled from 'styled-components'

import { DefaultStyles, StandardStyles, OutlinedStyles } from './styled'
import { Input } from '@components/atoms'

const BaseInput = React.forwardRef((props, ref) => {
    
    return (
        <Input ref={ref} {...props} />
    )
})

const DefaultInput = styled(BaseInput)`${DefaultStyles}`
const StandardInput = styled(BaseInput)`${StandardStyles}`
const OutlinedInput = styled(BaseInput)`${OutlinedStyles}`

export { DefaultInput, StandardInput, OutlinedInput }
