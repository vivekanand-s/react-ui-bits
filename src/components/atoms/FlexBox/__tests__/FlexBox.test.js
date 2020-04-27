import React from 'react'
import { mount } from 'enzyme'

import FlexBox from '../FlexBox'
import { checkProps, findByTestAttr } from '@utils/enzymejest'

const setup = (props={}) => mount(<FlexBox container {...props}></FlexBox>)

const setupItem = (props={}) => mount(<FlexBox item xs={6} {...props} >Item1</FlexBox>)

describe('FlexBox component tests', () => {

    describe('<FlexBox />', () => {
        let component, item

        beforeAll(() => {
            component = setup()
            item = setupItem()
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'flexbox-root').exists()).toBe(true)
        })

        it('checks props', () => {
            let error = checkProps(FlexBox, {
                xs: 6,
                wrap: 'nowrap',
                direction: 'row',
                justify: 'end',
                align: 'stretch'
            })
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})