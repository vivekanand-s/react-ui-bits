import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styled'
import { Label, Input } from '@components/atoms'

//http://react.tips/checkboxes-in-react/

/**
 * Checkbox base component
 */

const CheckBox = React.forwardRef((props, ref) => {
    
    const {
        value,
        name,
        label,
        className = '',
        height = '18px',
        width = '18px',
        checked = false,
        onChange = (event) => {
            setChecked(check => !check)
            handleCheckboxChange(event.target.value)
        },
        handleCheckboxChange = () => {},
        ...restprops
    } = props
    
    const [ isChecked, setChecked ] = useState(checked)
    
    useEffect(()=> {
        (checked && !onChange) && handleCheckboxChange(value)
    },[])

    return (
        <Label ref={ref} data-test='input-checkbox' className={`checkbox ${className}`} styles={Styled.SVGStyles}>
            <Styled.CheckBoxWrapper height={height} width={width}>
                <Input name={name} type="checkbox" value={value} 
                    checked={isChecked} onChange={onChange} {...restprops} styles={Styled.CheckBoxStyles} />
                <svg viewBox="0 0 25 25">
                    <path d="M4.5 12.5 l4 4.5 11.5 -10" />
                </svg>
            </Styled.CheckBoxWrapper>
            <span style={{padding: '0 0.5rem'}}>{label}</span>
        </Label>
    )
})

CheckBox.propTypes = {
    /**
     * Name for the checkbox
     */
    name: PropTypes.string.isRequired,
    /**
     * Value for the checkbox
     */
    value: PropTypes.string.isRequired,
    /**
     * Height of the checkbox
     */
    height: PropTypes.string,
    /**
     * Width of the checkbox
     */
    width: PropTypes.string,
    /**
     * Label to display the user
     */
    label: PropTypes.string,
    /**
     * If true, checkbox will be selected
     */
    checked: PropTypes.bool,
    /**
     * Callback to change checked state
     */
    onChange: PropTypes.func,
    /**
     * Handler to get selected checkbox values, if onchange handler is not specifed
     */
    handleCheckboxChange: PropTypes.func,
    // ref: PropTypes.oneOf([
    //     PropTypes.func,
    //     PropTypes.shape({current: PropTypes.instanceOf(Element)})
    // ])
}

export default CheckBox
export { CheckBox }
