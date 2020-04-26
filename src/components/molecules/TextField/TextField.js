import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledTextField as Styled } from './styled'
import {
    DefaultInput,
    StandardInput,
    OutlinedInput,
    Label
} from '@components/atoms'

const variantComponent = {
    standard: styled(StandardInput)`${Styled.StandardFocusStyles}`,
    default: styled(DefaultInput)`${Styled.DefaultFocusStyles}`,
    outlined: styled(OutlinedInput)`${Styled.OutlinedFocusStyles}`,
}

const TextField = React.forwardRef((props, ref) => {
    
    const {
        type = 'text',
        name = '',
        placeholder = ' ',
        autocomplete =  'off',
        label = '',
        value,
        className = '',
        variant = 'default',
        onChange,
        ...restprops
    } = props
    const Input = variantComponent[variant]
    let animateBorder = variant === 'standard' ? false : true
    animateBorder = props.animateBorder || animateBorder
    
    return (
        <Styled.Wrapper>
            <Input ref={ref} data-test='input-root' type={type} autocomplete={autocomplete}
                name={name} placeholder={placeholder} value={value} onChange={onChange} 
                className={`${variant} ${className}`} animateBorder={animateBorder} {...restprops}
            />
            <Label styles={Styled.LabelStyles} variant={variant}>{label}</Label>
            {variant === 'standard' &&
                <Styled.Border />
            }
        </Styled.Wrapper>
    )
})

TextField.propTypes = {
    /**
     * Type of the input box
     */
    type: PropTypes.string,
    /**
     * Name of the input box
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
     * Label to add information about the input
     */
    label: PropTypes.string.isRequired,
    /**
     * The value of the input element
     */
    value: PropTypes.string,
    /**
     * Default values for the input element
     */
    defaultValue: PropTypes.string,
    /**
     * To choose pre-defined styles
     */
    variant: PropTypes.oneOf(['default', 'standard', 'outlined']),
    /**
     * Handler to change input values
     */
    onChange: PropTypes.func,
    /**
     * Custom styles for the element
     */
    styles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
}

export default TextField
export { TextField }
