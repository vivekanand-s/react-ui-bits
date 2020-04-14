import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput as Styled } from './styled'

/**
 * Input base component
 */
const Input = React.forwardRef((props, ref) => { 
    
    const { 
        type = 'text',
        autocomplete = 'off',
        placeholder,
        name = '',
        defaultValue,
        value,
        onChange,
        className = '',
        styles,
        animateBorder = true,
        ...restprops 
    } = props

    return (
        <Styled.Input type={type}  ref={ref} data-test='input-root' className={`input-${type} ${className}`}
            autocomplete={autocomplete} name={name} placeholder={placeholder} value= {value} onChange={onChange}
            defaultValue={defaultValue} styles={styles} animateBorder={animateBorder} {...restprops} />
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
    /**
     * Custom styles for input
     */
    styles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    /**
     * If true, error animation will be shown
     */
    error: PropTypes.bool,
    ref: PropTypes.oneOf([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(PropTypes.Element)})
    ])
}

export default Input
export { Input }
