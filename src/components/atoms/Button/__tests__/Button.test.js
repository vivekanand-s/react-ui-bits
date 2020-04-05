import React from 'react'
import { mount } from 'enzyme'

import Button from '../Button'
import { findByTestAttr, checkProps } from '@utils/enzymejest'

const setup = ( props={} ) => mount(<Button {...props}>{props.children}</Button>)
const buttonprops = {
    children: 'TEST',
    color: 'primary',
    variant: 'contained',
    onClick: jest.fn()
}
const anchorprops = {
    children: 'TEST',
    color: 'primary',
    variant: 'contained',
    tagName: 'a',
    href: '/a'
}

describe('Button Component Tests', () => {

    describe('<Button />', () => {
        
        let component
        
        beforeAll(() => {
            component = setup(buttonprops)
        })
    
        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'button-root').exists()).toBe(true)
        })
    
        it('renders label', () => {
            expect(findByTestAttr(component, 'button-label').exists()).toBe(true)
        })

        it('check onClick handler', () => {
            let element = component.find('button')
            element.simulate('click')
            expect(buttonprops.onClick).toHaveBeenCalled()
        })

        it('check proptypes', () => {
            let error = checkProps(Button, buttonprops)
            expect(error).toBeUndefined()
        })
    
        afterAll(() => {
            component.unmount()
        })
    })

    describe('<Button /> with anchor', () => {

        let component
        
        beforeAll(() => {
            component = setup(anchorprops)
        })

        it('renders anchor', () => {
            expect(component.find('a').exists()).toBe(true)          
        })
        
        it('check anchor proptypes', () => {
            let error = checkProps(Button, anchorprops)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})

// describe('<Button /> error handling', () => {
//     it('needs child', () => {
//         expect(() => <Button></Button>).toThrow()
//     })
    
//     it('anchor needs href', () => {
//         expect(() => <Button tagName='a' href=''>ANCHOR</Button>).toThrow()
//     })
// })