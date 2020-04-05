import React from 'react'
import { mount } from 'enzyme'

import RadioButton from '../RadioButton'
import { checkProps, findByTestAttr} from '@utils/enzymejest'

const setup = (props={}) => mount(<RadioButton {...props} />)
const radioprops = {
    name: 'test',
    value: 'test',
    onChange: jest.fn(),
    label: 'TEST',
    height: '25px',
    width: '50px',
    checked: 'test'
}

describe('RadioButton Component Tests', () => {

    describe('<RadioButton />', () => {
        
        let component, element

        beforeAll(() => {
            component = setup(radioprops)
            element = component.find('input')
        })

        it('render element', () => {
            expect(findByTestAttr(component, 'input-radio').exists()).toBe(true)
        })
        
        it('is radiobutton checked', () => {   
            expect(element.props().checked).toBe(true)
        })

        it('check onchange handler', () => {
            element.simulate('change')
            expect(radioprops.onChange).toHaveBeenCalled()
        })

        it('check proptypes', () => {
            let error = checkProps(RadioButton, radioprops)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})