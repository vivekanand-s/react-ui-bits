import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

import * as Styled from './styled'

const Collapse = React.forwardRef((props, ref) => {
    const wref = React.useRef(null)
    const {
        timeout = 500,
        in: inProp,
        children,
        className = '',
        onEntering,
        ...restprops
    } = props

    const transitionStyle = {
        exiting: { height: '0px' }
    }

    const handleEntering = (node, isAppearing) => {
        const wh = wref.current.clientHeight
        node.style.height = `${wh}px`

        if(onEntering) {
            onEntering(node, isAppearing)
        }
    }

    return (
            <Transition in={inProp} timeout={timeout} {...restprops} onEntering={handleEntering}>
                {state => (
                    <Styled.Wrapper data-test='collapse-root' ref={ref} timeout={timeout} 
                        className={`collapse clp-${state} ${className}`}style={{...transitionStyle[state]}}>
                        <Styled.InnerWrap ref={wref}>
                                {children}
                            </Styled.InnerWrap>
                    </Styled.Wrapper>
                )}
            </Transition>
    )
})

Collapse.propTypes = {
    /**
     * Content to be collapsed
     */
    children: PropTypes.node,
    /**
     * The duration for the transition, in milliseconds
     */
    timeout: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            appear: PropTypes.number,
            enter: PropTypes.number,
            exit: PropTypes.number
        })
    ]),
    /**
     * If true, component will transition in
     */
    in: PropTypes.bool,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) })
    ])
}

export default Collapse
export { Collapse }