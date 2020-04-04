import checkPropTypes from 'check-prop-types' 

const findByTestAttr = (component, attr) => component.find(`[data-test="${attr}"]`)

const checkProps = (component, values) => {
    const error = checkPropTypes(component.propTypes, values, 'props', component.name)
    return error
}

export { findByTestAttr, checkProps }