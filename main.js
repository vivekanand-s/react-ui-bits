import React, { useState } from 'react'
import ReactDOM from 'react-dom'
  
import { Avatar } from '@components/atoms'
import { CardHeader } from '@components/molecules'

const style = {
    root: {
        boxShadow: '0 0 4px 0px rgba(0,0,0,0.25)' /* dont delete */
    },
    avatar: {
        marginRight: '10px'
    }
}

const App = (props) => {


    return(
        <>  
            <CardHeader title="My Long Title" subtitle="Sub-Title Location" styles={style.root} 
                avatar= {
                    <Avatar styles={style.avatar}>V</Avatar>
                }
            />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))  