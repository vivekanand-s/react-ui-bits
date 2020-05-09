import React, { useEffect } from 'react'

const AOS = props => {
    
    const {
        options: {
            root = null,
            threshold = 1,
            rootMargin = '0px'
        } = {},
        styles = {},
        aosref
    } = props

    const observer = new IntersectionObserver((entries, observe) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return
            
            Object.entries(styles).map(([key, value]) => {
                aosref.current.style[key] = value
            })
            observe.unobserve(aosref.current)
        })
    }, {root, threshold, rootMargin})

    useEffect(() => {
        observer.observe(aosref.current)
    }, [])

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export { AOS }