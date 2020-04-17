import React from 'react'
import { mount } from 'enzyme'

import Card from '../Card'
import { checkProps, findByTestAttr }  from '@utils/enzymejest'

const setup = (props={}) => mount(<Card {...props}>{props.children}</Card>)
const cardProps = {
    width: '500px',
    styles: {color: 'red'},
    children: <div>Children</div>
}

describe('Card component tests', () => {

    describe('<Card />', () => {
        let component

        beforeAll(() => {
            component = setup(cardProps)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'card-root').exists()).toBe(true)
        })

        it('checks proptypes', () => {
            let error = checkProps(Card, cardProps)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })

    })
    
})