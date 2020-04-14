import React from 'react'
import PropTypes from 'prop-types'

import { StyledForm as Styled } from './styled'

const Form = React.forwardRef((props, ref) => {
    const {
        action,
        method,
        autoComplete,
        target,
        name,
        onSubmit,
        children,
        className = '',
        ...restprops
    } = props

    return(
        <Styled.Form ref={ref} data-test='form-root' className={`form ${className}`} name={name} action={action} method={method} target={target} 
            autoComplete={autoComplete} onSubmit={onSubmit} {...restprops}>
            {children}
        </Styled.Form>
    )
})

Form.propTypes = {
    /**
     * An address (url) where to submit the form
     */
    action: PropTypes.string,
    /**
     * The HTTP method used when submitting the form
     */
    method: PropTypes.string,
    /**
     * If the browser should autocomplete the form
     */
    autoComplete: PropTypes.string,
    /**
     * The target of the address in the action attribute
     */
    target: PropTypes.string,
    /**
     * A name used to identify the form
     */
    name: PropTypes.string,
    /**
     * Event occurs when a form is submitted.
     */
    onSubmit: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    children: PropTypes.node
}

export default Form
export { Form }
