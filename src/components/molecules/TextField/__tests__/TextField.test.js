import React from 'react'
import { mount } from 'enzyme'

import TextField from '../TextField'
import { findByTestAttr } from '@utils/enzymejest'

const setup = (props={}) => mount(<TextField {...props} />)
const inputprops = {
    type: 'text',
    name: 'email',
    value: '',
    label: 'TEST',
    onChange: jest.fn(),
}

describe('TexField Component Tests', () => {
    
    describe('<TextField />', () => {

        let component

        beforeAll(() => {
            component = setup(inputprops)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'input-root').exists()).toBe(true)
        })

        it('renders label', () => {
            expect(component.find('label').text()).toEqual('TEST')
        })

        it('checks onchange handler', () => {
            let element = component.find('input')
            element.simulate('change')
            expect(inputprops.onChange).toHaveBeenCalled()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})