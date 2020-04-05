import React from 'react'
import { mount } from 'enzyme'

import CheckBox from '../CheckBox'
import { findByTestAttr, checkProps } from '@utils/enzymejest'

const setup = (props={}) => mount(<CheckBox {...props} />)
const checkboxprops = {
    height: '50px',
    width: '50px',
    label: 'TEST',
    name: 'test',
    value: 'test',
    checked: true,
    handleCheckboxChange: jest.fn()
}

describe('CheckBox Component Tests', () => {

    describe('<CheckBox />', () => {

        let component, element

        beforeAll(() => {
            component = setup(checkboxprops)
            element = component.find('input')
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'input-checkbox').exists()).toBe(true)
        })

        it('is checkbox checked', () => {
            expect(element.props().checked).toBe(true)
        })

        it('checks onChange handler', () => {
            //element.simulate('change')
            expect(component.props().handleCheckboxChange).toHaveBeenCalled()
        })

        it('check proptypes', () => {
            let error = checkProps(CheckBox, checkboxprops)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })

})