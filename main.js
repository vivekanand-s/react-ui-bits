import React, { useState } from 'react'
import ReactDOM from 'react-dom'
  
import { AOSTile } from '@components/organisms'

const App = (props) => {
    const contents = [{
            image: 'https://image.shutterstock.com/image-photo/four-red-telephone-boxes-on-600w-117337690.jpg',
            alt: 'alt text',
            title: 'Title',
            text: 'Content of the tile',
            styles: {
                background: 'red',
                color: '#fff'
            }
        },
        {
            image: 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
            alt: 'alt text',
            title: 'Title',
            text: 'Content of the tile' 
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
            alt: 'alt text',
            title: 'Title',
            text: 'Content of the tile',
            direction: ['right', 'left']
        },
        {
            image: 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
            alt: 'alt text',
            title: 'Title 3',
            text: 'Content of the tile',
            className: 'first-tile',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
            alt: 'alt text',
            title: 'Title',
            text: 'Content of the tile',
        },
        {
            image: 'https://image.shutterstock.com/image-photo/four-red-telephone-boxes-on-600w-117337690.jpg',
            alt: 'alt text',
            title: 'https://image.sh utterstock.com/ image-photo/fou r-red-telephone -boxes-on-600w-1 17337690.jpghttps://image.shutterstock.com/image-photo/four-red-telephone-boxes-on-600w-117337690.jpg',
            text: 'Content of the tile'
        }]
    
    return(
        <AOSTile contents={contents} />
    )
}

ReactDOM.render(<App />, document.getElementById('app'))  