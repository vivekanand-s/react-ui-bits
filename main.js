import React from 'react'
import ReactDOM from 'react-dom'

import { ExInput } from './src/examples'

const selects = new Set()

const App = () => {
    return (
        <ExInput />
    )
}

ReactDOM.render(<App />, document.getElementById('app'))  