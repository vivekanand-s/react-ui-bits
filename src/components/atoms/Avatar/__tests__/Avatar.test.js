import React from 'react'
import { mount } from 'enzyme'

import Avatar from '../Avatar'
import { checkProps, findByTestAttr } from '@utils/enzymejest'

const setup = (props={}) => mount(<Avatar {...props}>{props.children}</Avatar>)
const avatarProps = {
    src: 'image.png',
    alt: 'image alt',
    children: 'V',
    background: '#000',
    color: '#fff'
}

describe('Avatar Component Tests', () => {
    
    describe('<Avatar />', () => {
        let component, element

        beforeAll(() => {
            component = setup(avatarProps)
            element = component.find('img')
        })

        it('renders without crashing', () =>{
            expect(findByTestAttr(component, 'avatar-root').exists()).toBe(true)
        })

        it('renders image', () => {          
            expect(element.exists()).toBe(true)
        })

        it("renders image src", () => {
            expect(element.prop('src')).toBe('image.png')
        })

        it('check proptypes', () => {
            let error = checkProps(Avatar, avatarProps)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})