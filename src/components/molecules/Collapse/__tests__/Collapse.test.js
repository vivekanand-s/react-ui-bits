import React from 'react'
import { mount } from 'enzyme'

import Collapse from '../Collapse'
import { checkProps, findByTestAttr }  from '@utils/enzymejest'

const setup = (props={}) => mount(<Collapse {...props} />)
const collapseProps = {
    in: false,
    timeout: 500,
    children: <div>Children</div>
}

describe('Collapse component tests', () => {

    describe('<Collapse />', () => {
        let component

        beforeAll(() => {
            component = setup(collapseProps)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'collapse-root').exists()).toBe(true)
        })

        it('checks unmountonExit', () => {
            component = setup({...collapseProps, unmountOnExit: true})
            expect(findByTestAttr(component, 'collapse-root').exists()).toBe(false)
        })

        it('checks proptypes', () => {
            let error = checkProps(Collapse, collapseProps)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })

    })
    
})