import React from 'react'
import { mount } from 'enzyme'

import Form from '../Form'
import { checkProps, findByTestAttr } from '@utils/enzymejest'

const setup = (props={}) => mount(<Form {...props}></Form>)
const formProps = {
    action: '/url',
    method: 'GET',
    target: '_blank',
    name: 'form',
    onSubmit: jest.fn(),
}

describe('Form component tests', () => {

    describe('<Form />', () => {
        let component

        beforeAll(() => {
            component = setup(formProps)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'form-root').exists()).toBe(true)
        })

        it('checks onSubmit handler', () => {
            const element = component.find('form')
            element.simulate('submit')
            expect(formProps.onSubmit).toHaveBeenCalled()
        })

        it('checks props', () => {
            let error = checkProps(Form, formProps)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})