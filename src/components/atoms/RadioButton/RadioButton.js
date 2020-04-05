import React  from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styled'
import { Input, Label } from '@components/atoms'

/**
 * Radiobutton base component
 */

const RadioButton = React.forwardRef((props, ref) => {
    
    const { 
        height = '18px',
        width = '18px',
        value,
        name,
        label,
        className = '',
        checked,
        onChange,
        ...restprops
    } = props

    return (
        <Label ref={ref} data-test='input-radio' className={`radio ${className}`} styles={Styled.SVGStyles}>
            <Styled.RadioWrapper height={height} width={width}>
                <Input type='radio' name={name} value={value} 
                    checked={checked === value} onChange={onChange} {...restprops} />
                <svg viewBox='0 0 26 26'>
                    <circle className='svg-circle-1' cx='13' cy='13' r='12' />
                    <circle className='svg-circle-2' cx='13' cy='13' r='6' />
                    <circle className='svg-circle-3' cx='13' cy='13' r='12' />
                </svg>
            </Styled.RadioWrapper>
            <span style={{padding: '0 0.5rem'}}>{label}</span>
        </Label>

    )
})

RadioButton.propTypes = {
    /**
     * Height of the radio button
     */
    height: PropTypes.string,
    /**
     * Width of the radio button
     */
    width: PropTypes.string,
    /**
     * Label to display the user
     */
    label: PropTypes.string,
    /**
     * Name for the radio button
     */
    name: PropTypes.string.isRequired,
    /**
     * Value for the radio button
     */
    value: PropTypes.string.isRequired,
    /**
     * If true, radio button will be selected
     */
    checked: PropTypes.string,
    /**
     * Callback to change checked state
     */
    onChange: PropTypes.func,
    ref: PropTypes.oneof([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ])
}

export default RadioButton
export { RadioButton }
