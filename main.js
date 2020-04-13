import React, { useState } from 'react'
import ReactDOM from 'react-dom'
  
import { Button, TypoGraphy } from '@components/atoms'
import { Collapse } from '@components/molecules'

const style = {
    border: '1px solid #ccc'
}

const App = (props) => {
    const [expanded, setExpanded] = useState(false)
    const handleExpand = () => setExpanded(!expanded)

    return(
        <>
            <Collapse in={expanded} timeout={300} unmountOnExit>
                <TypoGraphy>
                The Transition component lets you describe a transition from one
                component state to another over time with a simple declarative API.
                Most commonly it's used to animate the mounting and unmounting of a
                component, but can also be used to describe in-place transition
                states as well. Note: Transition is a platform-agnostic base
                component. If you're using transitions in CSS, you'll probably want
                to use CSSTransition instead. It inherits all the features of
                Transition, but contains additional features necessary to play nice
                with CSS transitions (hence the name of the component). By default
                the Transition component does not alter the behavior of the
                component it renders, it only tracks "enter" and "exit" states for
                the components. It's up to you to give meaning and effect to those
                states. For example we can add styles to a component when it enters
                or exits:
                </TypoGraphy>
            </Collapse>
            <Button onClick={handleExpand}>Expand</Button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))  