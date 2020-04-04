import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { StyledCheckBox, StyledBoxWrap, StyledCheckBoxWrap } from './styled'

//http://react.tips/checkboxes-in-react/

/**
 * @param {{ height: string, width: string, label: string, name: string, value: string, checked: bool}}
 */

const CheckBox = React.forwardRef((props, ref) => {
    
    const {
        value,
        name,
        label,
        onChange,
        height = '18px',
        width = '18px',
        checked = false,
        handleCheckboxChange = () => {},
        ...restprops
    } = props
    
    const [ isChecked, setChecked ] = useState(checked)
    
    useEffect(()=> {
        (checked && !onChange) && handleCheckboxChange(value)
    },[])

    let toggleChange = onChange
    if(!onChange) {
        toggleChange = (event) => {
            setChecked(check => !check)
            handleCheckboxChange(event.target.value)
        }
    }

    return (
        <StyledBoxWrap ref={ref} data-test='input-checkbox'>
            <StyledCheckBoxWrap height={height} width={width}>
                <StyledCheckBox name={name} type="checkbox" value={value} 
                    checked={isChecked} onChange={toggleChange} {...restprops} />
                <svg viewBox="0 0 25 25">
                    <path d="M4.5 12.5 l4 4.5 11.5 -10" />
                </svg>
            </StyledCheckBoxWrap>
            <span style={{padding: '0 9px'}}>{label}</span>
        </StyledBoxWrap>

    )
})

CheckBox.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    handleCheckboxChange: PropTypes.func
}

export default CheckBox
export { CheckBox }
