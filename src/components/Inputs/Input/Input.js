import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './styled'

const Input = React.forwardRef((props, ref) => { 
    
    const { 
        type = 'text',
        autocomplete = 'off',
        placeholder = ' ',
        name = '',
        defaultValue,
        value,
        onChange,
        ...restprops 
    } = props

    return (
        <StyledInput type={type}  ref={ref} data-test='input-root' className='input-root'
            autocomplete={autocomplete} name={name} placeholder={placeholder} value= {value} 
            onChange={onChange} defaultValue={defaultValue} {...restprops} />
    )
})

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    ref: PropTypes.oneOf([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ])
}

export default Input
export { Input }
