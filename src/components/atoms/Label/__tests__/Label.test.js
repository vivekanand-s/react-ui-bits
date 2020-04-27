import React from 'react'
import { mount } from 'enzyme'

import Label from '../Label'
import { findByTestAttr } from '@utils/enzymejest'

const setup = (props) => mount(<Label {...props}>LABEL</Label>)

describe('Label Component Tests', () => {

    describe('<Label />', () => {

        let component
    
        beforeAll(() => {
            component = setup()
        })
    
        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'label-root').exists()).toBe(true)
        })
    
        it('renders text', () => {
            expect(component.find('label').text()).toEqual('LABEL')
        })
    
        afterAll(() => {
            component.unmount()
        })
    })
    
})
