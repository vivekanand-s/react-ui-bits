import React from 'react'
import { mount } from 'enzyme'

import CardHeader from '../CardHeader'
import { checkProps, findByTestAttr }  from '@utils/enzymejest'

const setup = (props={}) => mount(<CardHeader {...props} />)
const cardheaderProps = {
    avatar: <div>Avatar</div>,
    title: 'Title',
    subtitle: 'Sub-Title',
    width: '350px'
}

describe('CardHeader component tests', () => {

    describe('<CardHeader />', () => {
        let component

        beforeAll(() => {
            component = setup(cardheaderProps)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'cardheader-root').exists()).toBe(true)
        })

        it('checks proptypes', () => {
            let error = checkProps(CardHeader, cardheaderProps)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })

    })
    
})