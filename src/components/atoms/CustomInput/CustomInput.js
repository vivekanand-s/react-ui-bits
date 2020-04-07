import React from 'react'

import { DefaultStyles, StandardStyles } from './styled'
import { Input } from '@components/atoms'

const DefaultInput = React.forwardRef((props, ref) => {
    
    return (
        <Input styles={DefaultStyles} ref={ref} {...props} />
    )
})

const StandardInput = React.forwardRef((props, ref) => {
    
    return (
        <Input styles={StandardStyles} ref={ref} {...props} />
    )
})

const OutlinedInput = React.forwardRef((props, ref) => {
    
    return (
        <Input styles={StandardStyles} ref={ref} {...props} />
    )
})

export { DefaultInput, StandardInput, OutlinedInput }
