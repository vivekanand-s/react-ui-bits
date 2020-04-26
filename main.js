import React, { useState } from 'react'
import ReactDOM from 'react-dom'
  
import { Tiles } from '@components/organisms'

const App = (props) => {
    const items = {
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
            btnOnHover: false,
            button: {
                name: 'Learn More'
            }
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
            className: 'first-tile',
            button: {
                name: 'Learn More',
                events: {
                    onMouseOver: () => alert()
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
            className: 'first-tile',
            button: {
                name: 'Learn More',
            }
        },
        {
            column: 3,
            image: 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
            alt: 'alt text',
            title: 'Title 3',
            text: 'Content of the tile',
            link: '/link',
            bgcolor: '#707070',
            className: 'first-tile',
            reverse: false,
            button: {
                name: 'Learn More'
            }
        },
        {
            column: 3,
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
            alt: 'alt text',
            title: 'Title',
            text: 'Content of the tile',
            link: '/link',
            className: 'first-tile',
            button: {
                name: 'Learn More'
            }
        },
        {
            image: 'https://image.shutterstock.com/image-photo/four-red-telephone-boxes-on-600w-117337690.jpg',
            alt: 'alt text',
            title: 'Title',
            bgcolor: '#707070',
            text: 'Content of the tile',
            link: '/link',
            className: 'first-tile', 
            showArrow: true,
            reverse: false,
            button: {
                name: 'Learn More'
            }
        }]
    }
    
    return(
        <Tiles items={items} />
    )
}

ReactDOM.render(<App />, document.getElementById('app'))  