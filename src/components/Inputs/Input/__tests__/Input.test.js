import React from 'react'
import { mount } from 'enzyme'

import Input from '../Input'
import { findByTestAttr, checkProps } from '@utils/enzymejest'

const setup = (props={}) => mount(<Input {...props} />)
const inputprops = {
    type: 'text',
    name: 'email',
    value: '',
    onChange: jest.fn(),
}

describe('Input Component tests', () => {
    
    describe('<Input />', () => {

        let component

        beforeAll(() => {
            component = setup(inputprops)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'input-root').exists()).toBe(true)
        })

        it('checks onchange handler', () => {
            let element = component.find('input')
            element.simulate('change', {target: {value: 'foo'}})
            expect(inputprops.onChange).toHaveBeenCalled()
        })

        it('check proptypes', () => {
            let error = checkProps(Input, inputprops)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})