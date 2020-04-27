import React from 'react'
import { mount } from 'enzyme'

import NavBar from '../NavBar'
import { checkProps, findByTestAttr } from '@utils/enzymejest'

const setup = (props={}) => mount(<NavBar {...props} />)
const navbarprops = {
    items: [{
        name: 'Careers',
        value: 'Careers',
        events: {
            onClick: jest.fn()
        }
    }],
    background: "red",
    color: "#fff"
}

describe('NavBar Component Tests', () => {

    describe('<NavBar />', () => {
        let component

        beforeAll(() => {
            component = setup(navbarprops)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'navbar-root').exists()).toBe(true)
        })

        it('renders navbar', () => {
            expect(component.find('li').exists()).toBe(true)
        })

        it('check nav item handler', () => {
            let element = component.find('li')
            element.simulate('click')
            expect(navbarprops.items[0].events.onClick).toHaveBeenCalled()
        })

        it('check proptypes', () => {
            let error = checkProps(NavBar, navbarprops)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})