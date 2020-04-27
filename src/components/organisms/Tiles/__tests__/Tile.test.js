import React from 'react'
import { mount } from 'enzyme'

import Tiles from '../Tiles'
import { findByTestAttr, checkProps } from '@utils/enzymejest'

const setup = (props={}) => mount(<Tiles items={props} />)
const tileprops =  {
    btnOnHover: false, 
    showArrow: true,
    reverse: true,
    btnOnHover: true,
    contents: [{
        column: 1,
        image: 'https://image.shutterstock.com/image-photo/four-red-telephone-boxes-on-600w-117337690.jpg',
        alt: 'alt text',
        title: 'Title',
        text: 'Content of the tile',
        link: '/link',
        className: 'first-tile',
        btnOnHover: false
    },
    {
        column: 2,
        image: 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
        alt: 'alt text',
        title: 'Title',
        text: 'Content of the tile',
        link: '/link',
        reverse: true,
        bgcolor: '#707070',
        className: 'second-tile',
        button: {
            name: 'Learn More',
            events: {
                onMouseOver: jest.fn()
            }
        }
    },
    {
        column: 2,
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        alt: 'alt text',
        title: 'Title',
        text: 'Content of the tile',
        link: '/link',
        className: 'third-tile',
        button: {
            name: 'Learn More',
            events: {
                onMouseOver: jest.fn()
            }
        }
    }]
}

describe('Tiles Component Tests', () => {
    
    describe('<Tile />', () => {
        let component
        
        beforeAll(() => {
            component = setup(tileprops)
        })

        it('renders without crashing', () => {
            expect(findByTestAttr(component, 'tiles-root').exists()).toBe(true)          
        })

        it('checks btnOnHover', () => {
            let element = component.find('.content-img button').at(0)
            element.simulate('mouseover')
            expect(tileprops.contents[1].button.events.onMouseOver).toHaveBeenCalled()
        })

        it('checks props', () => {
            let error = checkProps(Tiles, tileprops)
            expect(error).toBeUndefined()
        })

        afterAll(() => {
            component.unmount()
        })
    })
})