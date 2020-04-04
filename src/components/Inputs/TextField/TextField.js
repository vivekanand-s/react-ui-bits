import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrap,
    StyledStandardInput,
    StyledDefaultInput,
    StyledOutlinedInput,
    StyledInputLabel,
    StyledInputBorder 
} from './styled'

const variantComponent = {
    standard: StyledStandardInput,
    default: StyledDefaultInput,
    outlined: StyledOutlinedInput
}

const TextField = React.forwardRef((props, ref) => {
    
    const {
        type = 'text',
        name = '',
        placeholder = ' ',
        autocomplete =  'off',
        label = '',
        value,
        variant = 'default',
        ...restprops
    } = props
    const StyledInput = variantComponent[variant]
    
    return (
        <StyledWrap>
            <StyledInput data-test='input-root' type={type} autocomplete="off" ref={ref}
                name={name} placeholder={placeholder} value={value} {...restprops}
            />
            <StyledInputLabel variant={variant} className='label-root'>{label}</StyledInputLabel>
            <StyledInputBorder />
        </StyledWrap>
    )
})

TextField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'standard', 'outlined']),
    onChange: PropTypes.func,
    ref: PropTypes.oneOf([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ])
}

export default TextField
export { TextField }
