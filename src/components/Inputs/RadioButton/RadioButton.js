import React  from 'react'
import PropTypes from 'prop-types'

import { StyledRadioButton, StyledBoxWrap, StyledRadioWrap } from './styled'

const RadioButton = React.forwardRef((props, ref) => {
    
    const { 
        height = '18px',
        width = '18px',
        value,
        name,
        label,
        checked,
        onChange,
        ...restprops
    } = props

    return (
        <StyledBoxWrap ref={ref} data-test='input-radio'>
            <StyledRadioWrap height={height} width={width}>
                <StyledRadioButton type='radio' name={name} value={value} 
                    checked={checked === value} onChange={onChange} {...restprops} />
                <svg viewBox='0 0 26 26'>
                    <circle className='svg-circle-1' cx='13' cy='13' r='12' />
                    <circle className='svg-circle-2' cx='13' cy='13' r='6' />
                    <circle className='svg-circle-3' cx='13' cy='13' r='12' />
                </svg>
            </StyledRadioWrap>
            <span style={{padding: '0 9px'}}>{label}</span>
        </StyledBoxWrap>

    )
})

RadioButton.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.string,
    onChange: PropTypes.func
}

export default RadioButton
export { RadioButton }
