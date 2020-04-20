import React from 'react'
import { mount } from 'enzyme'

import Header from '../Header'
import { NavBar } from '@components/molecules'
import { checkProps, findByTestAttr } from '@utils/enzymejest'

const setup = (props={}) => mount(<Header {...props} />)
const headerProps = {
    logo: "//avatarfiles.alphacoders.com/205/205044.jpg",
    logoalt: "alt text",
    logotext: "Logo",
    navbar: <NavBar items={[{name: 'Careers',value: 'Careers'}]} />,
    justify: "center",
    background: "red",
    color: "#fff"
}

describe('Header Component Tests', () => {

    describe('<Header />', () => {
        let component

        beforeAll(() => {
            component = setup(headerProps)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'header-root').exists()).toBe(true)
        })

        it('renders navbar', () => {
            expect( component.find('nav').exists()).toBe(true)
        })

        it('check proptypes', () => {
            let error = checkProps(Header, headerProps)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})