import React, { useState } from 'react'
import ReactDOM from 'react-dom'
  
import { NavBar } from '@components/molecules'
import { Header } from '@components/organisms'

const Nav = (props) => {

    const [test, setValue] = useState('About')
    const handleChange = () => {
        setValue('Changed')
    }
    const items = [{
        name: 'about',
        value: test,
        events: {
            onClick: handleChange
        }
    },
    {
        name: 'contact',
        value: 'Contact',
        link: '/contact'
    },
    {
        name: 'Careers',
        value: 'Careers'
    }]

    return (
        <NavBar color='#fff' items={items} />
    )
}

const App = (props) => {

    return(
        <Header 
            logo="//avatarfiles.alphacoders.com/205/205044.jpg" 
            logoalt="alt text" 
            logotext="Logo"
            navbar={<Nav />}
            />
    )
}

ReactDOM.render(<App />, document.getElementById('app'))  