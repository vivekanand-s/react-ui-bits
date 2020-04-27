import React from 'react'
import { mount } from 'enzyme'

import TypoGraphy from '../TypoGraphy'
import { findByTestAttr, checkProps } from '@utils/enzymejest'

const setup = (props={}) => mount(<TypoGraphy {...props}>{props.children}</TypoGraphy>)
const typoprops = {
    children: 'PARAGRAPH',
    variant: 'h2'
}

describe('TypoGraphy Component Tests', () => {

    describe('<TypoGraphy />', () => {

        let component
    
        beforeAll(() => {
            component = setup(typoprops)
        })
    
        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'para-root').exists()).toBe(true)
        })
    
        it('renders text', () => {
            expect(component.find('p').text()).toEqual('PARAGRAPH')
        })

        it('check proptypes', () => {
            let error = checkProps(component, typoprops)
            expect(error).toBeUndefined()
        })
    
        afterAll(() => {
            component.unmount()
        })
    })

    describe('<TypoGraphy component prop', () => {
        
        it('render h3 component', () => {
            let component = setup({...typoprops, component: 'h3'})
            expect(component.find('h3').exists()).toBe(true)
            component.unmount() 
        })

    }) 
    
})
