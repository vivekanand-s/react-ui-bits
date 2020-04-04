import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styled'

/**
 * Input parent component
 */
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
        <Styled.Input type={type}  ref={ref} data-test='input-root' className='input-root'
            autocomplete={autocomplete} name={name} placeholder={placeholder} value= {value} 
            onChange={onChange} defaultValue={defaultValue} {...restprops} />
    )
})

Input.propTypes = {
    /**
     * Type of the input element. It should be a valid HTML5 input type
     */
    type: PropTypes.string,
    /**
     * Name for the input element
     */
    name: PropTypes.string,
    /**
     * The hint that should be displayed before the user enters a value
     */
    placeholder: PropTypes.string,
    /**
     * Property that can be used to fill values faster
     */
    autocomplete: PropTypes.string,
    /**
     * The value of the input element
     */
    value: PropTypes.string,
    /**
     * Callback to handle value change when the user enters value
     */
    onChange: PropTypes.func,
    /**
     * Callback to handle when focus out happens
     */
    onBlur: PropTypes.func,
    /**
     * Callback to handle when focus happens
     */
    OnFocus: PropTypes.func,
    /**
     * Default values for the input element
     */
    defaultValue: PropTypes.string,
    /**
     * Height of the element
     */
    height: PropTypes.string,
    /**
     * Width of the element
     */
    width: PropTypes.string,
    ref: PropTypes.oneOf([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ])
}

export default Input
export { Input }
